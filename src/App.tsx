import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import HealthPage from '@/pages/HealthPage';
import AboutPage from '@/pages/AboutPage';
import { AdminProvider } from '@/context/AdminContext';
import AdminToolbar from '@/components/ui/AdminToolbar';

import AdminPage from '@/pages/AdminPage';
import KetoPage from '@/pages/KetoPage';
import ZeroSugarPage from '@/pages/ZeroSugarPage';
import FlatbreadPage from '@/pages/FlatbreadPage';

const App: React.FC = () => {
  return (
    <AdminProvider>
      <AdminToolbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="keto" element={<KetoPage />} />
          <Route path="zero-sugar" element={<ZeroSugarPage />} />
          <Route path="flatbread" element={<FlatbreadPage />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </AdminProvider>
  );
};

export default App;
