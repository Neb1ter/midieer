import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Star, ChevronLeft, Share2, Heart, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/data/products';
import { cn } from '@/lib/utils';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  
  // Parallax effects
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">未找到该产品</h2>
          <Button onClick={() => navigate('/products')}>返回产品列表</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header for Mobile/Quick Actions */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 flex items-center justify-between px-4 lg:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button onClick={() => navigate(-1)} className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="font-semibold">{product.name}</span>
        <button className="p-2">
          <Share2 className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-black">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/10">
              {product.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {product.desc}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-primary hover:bg-primary/90 text-white border-0">
                立即购买 ¥{product.price}
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-lg border-white text-black hover:bg-white hover:text-black bg-transparent backdrop-blur-sm">
                了解更多
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              美味，<span className="text-gray-400">无需妥协。</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              我们重新构想了 {product.name} 的每一个细节。从原材料的甄选到烘焙工艺的革新，
              只为在剔除糖分的同时，保留最纯粹的味蕾享受。
              这不仅仅是一款食物，更是对健康生活方式的致敬。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid (Bento Box Style) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {product.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full border border-gray-100",
                  idx === 0 ? "md:col-span-2 bg-black text-white" : ""
                )}
              >
                <div>
                  <h3 className={cn("text-2xl font-bold mb-4", idx === 0 ? "text-white" : "text-gray-900")}>
                    {feature.title}
                  </h3>
                  <p className={cn("text-lg leading-relaxed", idx === 0 ? "text-gray-300" : "text-gray-500")}>
                    {feature.description}
                  </p>
                </div>
                {idx === 0 && (
                  <div className="mt-8 flex justify-end">
                    <Star className="w-12 h-12 text-yellow-400 fill-current opacity-80" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Parallax */}
      <section className="py-20 overflow-hidden">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-12 text-center">产品图集</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             {product.images?.map((img, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="rounded-3xl overflow-hidden h-[400px] shadow-lg"
               >
                 <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </motion.div>
             ))}
             {(!product.images || product.images.length === 0) && (
                <div className="col-span-full text-center text-gray-400 py-10">暂无更多图片</div>
             )}
           </div>
         </div>
      </section>

      {/* Specs & Buy Footer */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-8">规格参数</h3>
              <div className="space-y-4">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl sticky top-24">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <div className="flex items-center mt-2 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-gray-900 font-medium">{product.rating}</span>
                    <span className="ml-1 text-gray-400 text-sm">(200+ 评价)</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary">¥{product.price}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button className="flex-1 h-12 rounded-xl text-lg bg-primary hover:bg-primary/90">
                    加入购物车
                  </Button>
                  <Button variant="outline" className="h-12 w-12 rounded-xl p-0 flex items-center justify-center border-gray-300">
                    <Heart className="w-6 h-6" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-4 mt-4">
                  <span className="flex items-center"><Check className="w-3 h-3 mr-1" /> 顺丰冷链</span>
                  <span className="flex items-center"><Check className="w-3 h-3 mr-1" /> 坏单包赔</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Product Navigation (Simple) */}
      <div className="py-12 bg-gray-50 text-center">
         <Button variant="link" onClick={() => navigate('/products')} className="text-gray-500 hover:text-primary text-lg">
           查看所有产品 <ArrowRight className="ml-2 w-5 h-5" />
         </Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
