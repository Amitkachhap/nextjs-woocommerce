// Components
import Layout from '@/components/Layout/Layout.component';
import CartContents from '@/components/Cart/CartContents.component';

// Types
import type { NextPage } from 'next';

const CART: NextPage = () => (
  <Layout title="SHOPPING CART">
    <CartContents />
  </Layout>
);

export default CART;
