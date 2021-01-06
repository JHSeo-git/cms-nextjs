import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import yaml from 'js-yaml';

export const renderHljs = async (postContent) => {
  const { content } = matter(postContent, {
    engines: {
      yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [require('rehype-highlight')],
    },
  });

  return hydrate(mdxSource);
};
