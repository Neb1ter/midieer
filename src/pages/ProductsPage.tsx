import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PRODUCTS } from '@/data/products';
import { Link } from 'react-router-dom';

const CATEGORIES = ["全部", "生酮系列", "零糖蛋糕", "零糖青团", "健康大饼", "低卡零食"];

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredProducts = activeCategory === "全部" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            探索美味与健康的平衡
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            我们精心研发的每一款产品，都严格遵循低GI、零蔗糖标准，
            让您在享受美食的同时，无需为身体负担担忧。
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <div className="sticky top-14 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md transform scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-12">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <Link to={`/products/${product.id}`}
              key={product.id}
            >
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6">
                     查看详情
                   </Button>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">
                  {product.desc}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-primary">¥{product.price}</span>
                  <Button size="sm" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>暂无该分类产品</p>
          </div>
        )}
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary/5 py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">找不到想要的？</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            我们提供私人定制服务，根据您的饮食需求定制专属健康食品。
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all px-8 py-6 h-auto text-lg rounded-full group">
            联系客服定制 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
