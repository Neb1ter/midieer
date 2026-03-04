import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import HealthPage from '@/pages/HealthPage';
import AboutPage from '@/pages/AboutPage';

// Simple Admin Placeholder
const AdminPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4">管理后台 (演示版)</h1>
      <p className="mb-4 text-gray-600">
        建议使用 Supabase Dashboard 作为正式的管理后台。
        <br />
        如果需要自定义后台，可以在此处扩展。
      </p>
      <div className="grid gap-4 text-left">
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="font-bold">产品管理</h3>
          <p className="text-sm">增删改查产品信息</p>
        </div>
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="font-bold">联系表单</h3>
          <p className="text-sm">查看用户留言和反馈</p>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="health" element={<HealthPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
