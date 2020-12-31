import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import yaml from 'js-yaml';

import {
  getAllPostSlugs,
  getPostData,
  PostContent,
} from '../../lib/meta/posts';
import Layout from '../../components/base/Layout';
import Post from '../../components/posts/Post';

interface Props {
  source: string;
  frontMatter: PostContent;
}

const PostIndex = ({ source, frontMatter }: Props) => {
  const hydratedSource = hydrate(source);
  return (
    <Layout title={`${frontMatter.title} | Next.js + TypeScript Example`}>
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
  return { props: { source: mdxSource, frontMatter: data as PostContent } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export default PostIndex;
