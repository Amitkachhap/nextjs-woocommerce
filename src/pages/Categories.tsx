import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';

import Categories from '@/components/Category/Categories.component';
import Layout from '@/components/Layout/Layout.component';

import client from '@/utils/apollo/ApolloClient';

import { FETCH_ALL_CATEGORIES_QUERY } from '@/utils/gql/GQL_QUERIES';

/**
 * Category page displays all of the categories
 */
const CATEGORIES: NextPage = ({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="CATEGORIES">
    {categories && <Categories categories={categories} />}
  </Layout>
);

export default CATEGORIES;

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query({
    query: FETCH_ALL_CATEGORIES_QUERY,
  });

  return {
    props: {
      categories: result.data.productCategories.nodes,
    },
    revalidate: 10,
  };
};