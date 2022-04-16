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
import CartPage from './pages/client/cart/CartPage';
import CheckoutPage from './pages/client/cart/CheckoutPage';

import AuthLayout from './pages/layouts/AuthLayout';
import Register from './pages/auth/Register';
import SignIn from './pages/auth/SignIn';

import UserProfileLayout from './pages/layouts/UserProfileLayout';
import Profile from './components/client/user/Profile';

import PrivateRouter from './components/PrivateRouter';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Product from './pages/admin/product/Product';
import EditProduct from './pages/admin/product/EditProduct';
import AddProduct from './pages/admin/product/AddProduct';
import CategoryProduct from './pages/admin/cateProduct/Category';
import EditCategory from './pages/admin/cateProduct/EditCategory';
import ListInvoice from './pages/admin/invoice/ListInvoice';
import DetailInvoice from './pages/admin/invoice/DetailInvoice';
import ListUser from './pages/admin/user/ListUser';

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
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:productName" element={<ProductDetailPage />} />

          <Route path="/profile" element={<UserProfileLayout />}>
            <Route index element={<Navigate to="user" />} />
            <Route path="user" element={<Profile />} />
          </Route>
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
        
          <Route path="category-product" element={<CategoryProduct />} />
          <Route path="category-product/:id/edit" element={<EditCategory />} />
          <Route path="invoice" element={<ListInvoice />} />
          <Route path="user" element={<ListUser />} />
          <Route path="invoice/:id/view" element={<DetailInvoice />} />

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
