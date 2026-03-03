import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Heart, Zap, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100/50 via-background to-background opacity-70"></div>
        
        <div className="animate-fade-in space-y-8 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm tracking-wide mb-4 border border-primary/10">
            重新定义健康甜点
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1.1]">
            低糖生活，<br className="md:hidden" />
            <span className="text-primary">高质享受。</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            迷迭尔 Midier 专注于生酮与低GI食品，让您在控糖的同时，依然能享受纯粹的美味。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105">
              浏览产品 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-2 hover:bg-secondary/50 transition-all hover:scale-105">
              了解生酮
            </Button>
          </div>
        </div>
      </section>

      {/* Features / Philosophy Section (Bento Grid Style) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">为什么选择迷迭尔？</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">我们坚持使用天然代糖，拒绝反式脂肪酸，只为给您更安心的选择。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Large Card */}
          <div className="md:col-span-2 row-span-2 rounded-3xl bg-secondary/30 p-8 md:p-12 flex flex-col justify-between border border-secondary hover:border-primary/20 transition-colors group relative overflow-hidden">
            <div className="relative z-10">
              <Leaf className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">真正零添加糖</h3>
              <p className="text-lg text-muted-foreground max-w-md">
                我们使用赤藓糖醇、罗汉果甜苷等天然代糖，不参与人体代谢，不引起血糖剧烈波动。适合控糖人群及生酮饮食者。
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0 group-hover:bg-primary/20 transition-all duration-500"></div>
          </div>

          {/* Tall Card */}
          <div className="md:col-span-1 row-span-2 rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <Zap className="w-10 h-10 mb-6 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-2">生酮友好</h3>
              <p className="opacity-90 leading-relaxed">
                高优质脂肪，适量蛋白质，极低碳水化合物。完美的生酮能量补给站。
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <Link to="/products/keto" className="inline-flex items-center text-sm font-semibold hover:underline underline-offset-4">
                查看生酮系列 &rarr;
              </Link>
            </div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>

          {/* Small Card 1 */}
          <div className="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">清洁标签</h3>
            <p className="text-sm text-muted-foreground">无防腐剂，无人工色素，配料表干净透明。</p>
          </div>

          {/* Small Card 2 */}
          <div className="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
            <Heart className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">用心烘焙</h3>
            <p className="text-sm text-muted-foreground">每日新鲜现做，保留食材最原本的风味。</p>
          </div>
        </div>
      </section>

      {/* Product Showcase Preview */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">当季热销</h2>
            <Link to="/products" className="text-primary font-medium hover:underline underline-offset-4 hidden sm:block">
              查看全部产品
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square rounded-2xl bg-white mb-4 overflow-hidden relative border border-gray-100">
                  <div className="absolute inset-0 bg-gray-100 animate-pulse group-hover:bg-gray-200 transition-colors flex items-center justify-center text-muted-foreground">
                    <span>产品图片占位</span>
                  </div>
                  <div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                    <Button size="icon" className="rounded-full shadow-lg bg-white text-foreground hover:bg-primary hover:text-white border-none">
                      <ShoppingBag className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">经典原味生酮巴斯克</h3>
                <p className="text-sm text-muted-foreground mb-2">无面粉 / 0蔗糖</p>
                <span className="font-medium">¥ 128.00</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
             <Link to="/products" className="text-primary font-medium hover:underline underline-offset-4">
              查看全部产品 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">开始您的低糖之旅</h2>
          <p className="text-xl text-muted-foreground">加入数万名健康饮食者的行列，体验身体轻盈的变化。</p>
          <div className="flex justify-center">
             <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-foreground text-background hover:bg-foreground/90">
              立即选购
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
