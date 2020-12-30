import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import Layout from '../../components/base/Layout';
import Title from '../../components/common/Title';
import PostList from '../../components/posts/PostList';
import { listPostContent, PostContent } from '../../lib/meta/posts';
import { listCategories } from '../../lib/meta/category';

interface Props {
  posts: PostContent[];
  category: string;
}

const Post = ({ posts, category }: Props) => {
  const router = useRouter();
  console.log(router);
  return (
    <Layout title="Posts | Next.js + TypeScript Example">
      <Title align="center">Learning Is For Us</Title>
      <PostList posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params?.slug);

  const posts = listPostContent();
  return { props: { posts, category: 'javascript' } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listCategories().flatMap((category) => {
    return [
      {
        params: {
          slug: [category.slug],
        },
      },
    ];
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export default Post;
