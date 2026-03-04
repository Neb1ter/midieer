import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Activity, Heart, Coffee, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HealthPage: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "什么是生酮饮食？新手入门指南",
      excerpt: "生酮饮食（Ketogenic Diet）是一种高脂肪、适量蛋白质和低碳水化合物的饮食方式...",
      category: "饮食科普",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "如何计算食物的GI值？",
      excerpt: "升糖指数（GI）是衡量食物对血糖影响的重要指标，掌握它能帮您更好控糖...",
      category: "控糖技巧",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cml0aW9ufGVufDB8fDB8fHww"
    },
    {
      id: 3,
      title: "断糖7天身体会发生什么变化？",
      excerpt: "减少糖分摄入不仅能减轻体重，还能改善皮肤状态和精神活力...",
      category: "健康生活",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const features = [
    { icon: <Activity className="w-6 h-6 text-blue-500" />, title: "科学控糖", desc: "基于医学研究的饮食建议" },
    { icon: <Heart className="w-6 h-6 text-red-500" />, title: "健康生活", desc: "全方位的健康生活方式指导" },
    { icon: <Coffee className="w-6 h-6 text-amber-700" />, title: "营养搭配", desc: "均衡膳食，不牺牲美味" },
    { icon: <BookOpen className="w-6 h-6 text-green-600" />, title: "专业课程", desc: "系统化的营养学课程体系" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=60')] bg-cover opacity-10 blur-[2px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Health Academy</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              健康学院 <br/>
              <span className="text-primary">重塑您的饮食认知</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              在这里，我们不仅提供食物，更传递健康的生活理念。
              深入了解营养学知识，做自己身体的掌舵人。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
                开始学习
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-gray-300 hover:bg-white hover:text-primary">
                订阅周刊
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                key={index}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">最新文章</h2>
              <p className="text-gray-500">探索最新的营养科学与健康资讯</p>
            </div>
            <a href="#" className="text-primary font-medium hover:underline hidden sm:flex items-center">
              查看更多 <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-gray-400 mb-3 flex items-center">
                    <span>{article.readTime} 阅读</span>
                    <span className="mx-2">•</span>
                    <span>2024-03-20</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 flex-1 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <a href="#" className="inline-flex items-center text-primary font-medium hover:translate-x-1 transition-transform">
                    阅读全文 <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Button variant="outline" className="w-full">查看更多文章</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">加入我们的健康社区</h2>
          <p className="text-gray-600 mb-8">
            每周一封邮件，分享最新的低糖食谱和营养知识，已有超过 10,000 名订阅者。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="请输入您的邮箱地址" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg h-auto">
              立即订阅
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> 免费订阅</span>
            <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> 随时退订</span>
            <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> 隐私保护</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthPage;
