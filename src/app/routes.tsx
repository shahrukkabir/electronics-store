import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: () => <Layout><Home /></Layout>,
  },
  {
    path: '/products',
    Component: () => <Layout><Products /></Layout>,
  },
  {
    path: '/product/:id',
    Component: () => <Layout><ProductDetail /></Layout>,
  },
  {
    path: '/cart',
    Component: () => <Layout><Cart /></Layout>,
  },
  {
    path: '/checkout',
    Component: () => <Layout><Checkout /></Layout>,
  },
  {
    path: '/about',
    Component: () => <Layout><About /></Layout>,
  },
  {
    path: '/contact',
    Component: () => <Layout><Contact /></Layout>,
  },
  {
    path: '*',
    Component: () => <Layout><NotFound /></Layout>,
  },
]);
