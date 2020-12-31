import { GetStaticProps } from 'next';

import Layout from '../../components/base/Layout';
import Title from '../../components/common/Title';
import PostList from '../../components/posts/PostList';
import { listPostContent, PostContent } from '../../lib/meta/posts';

interface Props {
  posts: PostContent[];
}

const Index = ({ posts }: Props) => (
  <Layout title="Posts | Next.js + TypeScript Example">
    <Title align="center">TIL</Title>
    <PostList posts={posts} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent();
  return { props: { posts } };
};

export default Index;
