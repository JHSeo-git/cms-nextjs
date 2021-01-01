import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';

import Layout from '../../../components/base/Layout';
import Title from '../../../components/common/Title';
import PostList from '../../../components/posts/PostList';
import { listPostContent, PostContent } from '../../../lib/meta/posts';
import { getCategory, listCategories } from '../../../lib/meta/categories';

interface Props {
  posts: PostContent[];
  category: string;
}

const SubTitle = styled.h3`
  margin-top: 0.5rem;
  text-align: center;
  color: ${(props) => props.theme.GrayColor.Color700};
`;

const CategoryPosts = ({ posts, category }: Props) => {
  return (
    <Layout title={`${category} Posts | Next.js + TypeScript Example`}>
      <Title align="center">TIL</Title>
      <SubTitle>{category}</SubTitle>
      <PostList posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params?.slug as string[];
  const [categorySlug] = queries;
  const posts = listPostContent(categorySlug);
  const category = getCategory(categorySlug);
  return { props: { posts, category: category.name } };
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
