import { GetStaticProps } from 'next';
import Layout from '../components/base/Layout';
import SideMenu from '../components/base/SideMenu';
import Home from '../components/Home';
import { CategoryContent, listCategories } from '../lib/meta/categories';
import { listPostContent, PostContent } from '../lib/meta/posts';

interface Props {
  categories: CategoryContent[];
  posts: PostContent[];
}

const IndexPage = ({ categories, posts }: Props) => {
  return (
    <Layout
      title="Home | Next.js + TypeScript Practice"
      sideMenu={<SideMenu categories={categories} posts={posts} />}
    >
      <Home categories={categories} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = listCategories();
  const posts = listPostContent();
  return { props: { categories, posts } };
};

export default IndexPage;
