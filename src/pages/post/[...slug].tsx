import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import yaml from 'js-yaml';

import {
  getAllPostSlugs,
  getPostData,
  listPostContent,
  PostContent,
} from '../../lib/meta/posts';
import Layout from '../../components/base/Layout';
import Post from '../../components/posts/Post';
import SideMenu from '../../components/base/SideMenu';
import { CategoryContent, listCategories } from '../../lib/meta/categories';

interface Props {
  source: string;
  frontMatter: PostContent;
  categories: CategoryContent[];
  posts: PostContent[];
}

const PostIndex = ({ source, frontMatter, categories, posts }: Props) => {
  const hydratedSource = hydrate(source);
  return (
    <Layout
      title={`${frontMatter.title} | Next.js + TypeScript Example`}
      sideMenu={
        <SideMenu
          categories={categories}
          posts={posts}
          currentCategory={frontMatter.category}
        />
      }
    >
      <Post mdxElement={hydratedSource} frontMatter={frontMatter} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [slug] = params?.slug as string[];
  const postContent = getPostData(slug);
  const { data, content } = matter(postContent, {
    engines: {
      yaml: (s) =>
        yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as Record<
          string,
          unknown
        >,
    },
  });

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [require('rehype-highlight')],
    },
  });

  const categories = listCategories();
  const posts = listPostContent();
  return {
    props: {
      source: mdxSource,
      frontMatter: data as PostContent,
      categories,
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export default PostIndex;
