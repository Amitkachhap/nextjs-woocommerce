// Components
import Layout from '@/components/Layout/Layout.component';
import CheckoutForm from '@/components/Checkout/CheckoutForm.component';

// Types
import type { NextPage } from 'next';

const CHECKOUT: NextPage = () => (
  <Layout title="CHECKOUT">
    <CheckoutForm />
  </Layout>
);

export default CHECKOUT;
