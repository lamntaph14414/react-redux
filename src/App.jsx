import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { addProduct, listProduct } from './features/product/productSlice';

import WebsiteLayout from './pages/layouts/WebsiteLayout';
import HomePage from './pages/client/HomePage';
import ProductPage from './pages/client/shop/ProductPage';
import ProductCate from './pages/client/shop/ProductCatePage';
import ProductDetailPage from './pages/client/shop/ProductDetailPage';
import AboutPage from './pages/client/AboutPage';
import ContactPage from './pages/client/ContacPage';

import AuthLayout from './pages/layouts/AuthLayout';
import Register from './pages/auth/Register';
import SignIn from './pages/auth/SignIn';

import PrivateRouter from './components/PrivateRouter';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Product from './pages/admin/product/Product';
import EditProduct from './pages/admin/product/EditProduct';
import AddProduct from './pages/admin/product/AddProduct';

import Page404 from './pages/Page404';

function App() {
  const product = useSelector(data => data.product.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProduct())
  }, []);
  return (
    <>
      <Routes>
        {/* Website */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/categories/all/:page" element={<ProductPage />} />
          <Route path="/categories/:cateName" element={<ProductCate />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:productName" element={<ProductDetailPage />} />


        </Route>

        {/* auth */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        {/* admin */}
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        
          <Route path="product">
            <Route index element={< Product />} />
            <Route path=":id/edit" element={<EditProduct />} />
            <Route path="add" element={<AddProduct />} />
          </Route>
        </Route>

        <Route path='*' element={<Page404/>} />
      </Routes>
    </>
  );
}

export default App;
