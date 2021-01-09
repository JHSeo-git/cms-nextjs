import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '../../../components/base/Layout';
import Title from '../../../components/common/Title';
import PostList from '../../../components/posts/PostList';
import { listPostContent, PostContent } from '../../../lib/meta/posts';
import {
  CategoryContent,
  getCategory,
  listCategories,
} from '../../../lib/meta/categories';
import SideMenu from '../../../components/base/SideMenu';

interface Props {
  menuPosts: PostContent[];
  menuCategories: CategoryContent[];
  posts: PostContent[];
  category: CategoryContent;
}

const CategoryPosts = ({
  posts,
  category,
  menuPosts,
  menuCategories,
}: Props) => {
  return (
    <Layout
      title={`${category.name} Posts | Next.js + TypeScript Example`}
      sideMenu={
        <SideMenu
          categories={menuCategories}
          posts={menuPosts}
          currentCategory={category.slug}
        />
      }
    >
      <Title align="center">{category.name}</Title>
      <PostList posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params?.slug as string[];
  const [categorySlug] = queries;
  const posts = listPostContent(categorySlug);
  const category = getCategory(categorySlug);
  const menuCategories = listCategories();
  const menuPosts = listPostContent();
  return {
    props: { posts, category, menuCategories, menuPosts },
  };
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

export default CategoryPosts;
