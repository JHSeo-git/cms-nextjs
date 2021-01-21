import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import rehypeToc from 'rehype-toc';
import type { Options } from 'rehype-toc';

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
import { TOCProvider } from '../../lib/contexts/TOCContext';

interface Props {
  source: string;
  frontMatter: PostContent;
  categories: CategoryContent[];
  posts: PostContent[];
  nextPost: PostContent | null;
  prevPost: PostContent | null;
}

const PostIndex = ({
  source,
  frontMatter,
  categories,
  posts,
  nextPost,
  prevPost,
}: Props) => {
  const hydratedSource = hydrate(source);
  return (
    <>
      <Head>
        <link rel="next" href={nextPost ? nextPost.slug : ''} />
        <link rel="prev" href={prevPost ? prevPost.slug : ''} />
      </Head>
      <TOCProvider>
        <Layout
          title={`${frontMatter.title}`}
          sideMenu={
            <SideMenu
              categories={categories}
              posts={posts}
              currentCategory={frontMatter.category}
            />
          }
        >
          <Post
            mdxElement={hydratedSource}
            frontMatter={frontMatter}
            nextPost={nextPost}
            prevPost={prevPost}
          />
        </Layout>
      </TOCProvider>
    </>
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
      rehypePlugins: [
        require('rehype-highlight'),
        require('rehype-slug'),
        require('rehype-autolink-headings'),
        // require('rehype-toc'),
        [
          rehypeToc,
          {
            headings: ['h1', 'h2', 'h3', 'h4'],
          } as Options,
        ],
      ],
    },
  });

  const categories = listCategories();
  const posts = listPostContent();
  const targetCategory = posts.find((post) => post.slug === slug)?.category;
  const postsByCategory = posts.filter(
    (post) => post.category === targetCategory
  );
  const targetIdx = postsByCategory.findIndex((post) => post.slug === slug);
  const nextPost =
    targetIdx + 1 < postsByCategory.length
      ? postsByCategory[targetIdx + 1]
      : null;
  const prevPost = targetIdx - 1 > -1 ? postsByCategory[targetIdx - 1] : null;
  return {
    props: {
      source: mdxSource,
      frontMatter: data as PostContent,
      categories,
      posts,
      nextPost,
      prevPost,
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
