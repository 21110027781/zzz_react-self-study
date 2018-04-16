import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import ContactPage from './pages/ContactPage/ContactPage';
import MangeProductPage from './pages/MangeProductPage/MangeProductPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductPage />
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
    }
];

export default routes;