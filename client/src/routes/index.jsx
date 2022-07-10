import React from 'react';
import { Routes, Route } from "react-router-dom";
import paths from './paths';
import NotFound from '../pages/not_found';
import HomePage from '../pages/home_page';
import AddressPage from '../pages/address_page';
import CheckoutPage from '../pages/checkout_page';


export default function AppRoute(props) {
    return (
        <Routes >
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.checkout} element={<CheckoutPage />} />
            <Route path={paths.address} element={<AddressPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
