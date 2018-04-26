import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ContactPage from './pages/ContactPage/ContactPage';
import MangeProductPage from './pages/MangeProductPage/MangeProductPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CartPage from './pages/CartPage/CartPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: ({match, location}) => <ProductPage match={match} location={location} />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '/manage-product',
        exact: false,
        main: () => <MangeProductPage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFoundPage />
    }
];

export default routes;