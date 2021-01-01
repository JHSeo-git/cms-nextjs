import { GetStaticProps } from 'next';

import Layout from '../../components/base/Layout';
import SideMenu from '../../components/base/SideMenu';
import Title from '../../components/common/Title';
import PostList from '../../components/posts/PostList';
import { CategoryContent, listCategories } from '../../lib/meta/categories';
import { listPostContent, PostContent } from '../../lib/meta/posts';

interface Props {
  categories: CategoryContent[];
  posts: PostContent[];
}

const Index = ({ categories, posts }: Props) => (
  <Layout
    title="Posts | Next.js + TypeScript Example"
    sideMenu={<SideMenu categories={categories} posts={posts} />}
  >
    <Title align="center">TIL</Title>
    <PostList posts={posts} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const categories = listCategories();
  const posts = listPostContent();
  return { props: { categories, posts } };
};

export default Index;
