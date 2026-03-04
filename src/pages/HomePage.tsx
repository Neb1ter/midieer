import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Zap, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ShinyText from '@/components/ui/ShinyText';
import EditableText from '@/components/ui/EditableText';
import EditableImage from '@/components/ui/EditableImage';
import EditableLink from '@/components/ui/EditableLink';

import LogoLoop from '@/components/ui/LogoLoop';
import AnimatedContent from '@/components/ui/AnimatedContent';
import CardSwap, { Card } from '@/components/ui/CardSwap';
import { useNavigate } from 'react-router-dom';

import GlassButton from '@/components/ui/GlassButton';
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';
import SpotlightCard from '@/components/ui/SpotlightCard';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const brandLogos = [
    { src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Anchor+Butter+logo+minimalist+white+background&image_size=square", alt: "Anchor", title: "安佳 Anchor" },
    { src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kiri+Cream+Cheese+logo+minimalist+white+background&image_size=square", alt: "Kiri", title: "Kiri 凯瑞" },
    { src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Lakanto+Monkfruit+Sweetener+logo+minimalist+white+background&image_size=square", alt: "Lakanto", title: "Lakanto" },
    { src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Callebaut+Chocolate+logo+minimalist+white+background&image_size=square", alt: "Callebaut", title: "Callebaut" },
    { src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=President+Cream+logo+minimalist+white+background&image_size=square", alt: "President", title: "President" },
    { src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Isigny+Ste+Mere+Butter+logo+minimalist+white+background&image_size=square", alt: "Isigny", title: "Isigny Ste Mère" },
  ];

  return (
    <div className="flex flex-col w-full bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        {/* Light Gradient Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/50 via-background to-background"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        <div className="animate-fade-in space-y-8 max-w-4xl mx-auto z-10 relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm tracking-wide mb-4 border border-primary/20 shadow-sm">
            <EditableText id="hero_badge" defaultText="重新定义健康甜点" />
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl font-bold text-foreground mb-6 tracking-tight leading-tight"
          >
            <span className="block sm:inline text-foreground">低糖生活，</span>
            <br className="sm:hidden" />
            <span className="block sm:inline text-primary">高质享受。</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <EditableText 
              id="home_subtitle" 
              defaultText="迷迭尔 Midier 专注于生酮与低GI食品，让您在控糖的同时，依然能享受纯粹的美味。" 
            />
          </p>
          <div className="flex flex-row items-center justify-center gap-6 pt-8">
            <div className="relative group cursor-pointer">
                <div className="relative flex items-center bg-primary hover:bg-primary/90 rounded-full px-8 py-4 shadow-lg transition-all duration-300 hover:scale-105">
                  <EditableLink 
                    id="hero_cta_primary" 
                    defaultText="浏览产品" 
                    defaultHref="/products" 
                    className="text-white font-semibold text-lg mr-2"
                  />
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
            
            <div className="group cursor-pointer">
               <div className="px-8 py-4 rounded-full border border-black/10 hover:bg-black/5 transition-all duration-300">
                   <EditableLink 
                     id="hero_cta_secondary" 
                     defaultText="了解生酮" 
                     defaultHref="/health" 
                     className="text-foreground font-semibold text-lg"
                   />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Loop */}
      <section className="py-12 border-y border-black/5 bg-secondary/30">
        <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                <EditableText id="brand_title" defaultText="严选全球顶级食材供应商" />
            </p>
        </div>
        <div className="relative h-20 overflow-hidden opacity-70 hover:opacity-100 transition-all duration-500 mix-blend-multiply">
            <LogoLoop 
                logos={brandLogos.map(logo => ({ 
                    src: logo.src, 
                    alt: logo.alt, 
                    title: logo.title,
                    width: 100,
                    height: 60
                }))} 
                speed={1.5} 
                direction="left" 
                logoHeight={60} 
                gap={80} 
                pauseOnHover={true}
                fadeOut={true}
            />
        </div>
      </section>

      {/* Features / Philosophy Section (ScrollStack) */}
      <section className="h-screen w-full relative">
        <div className="absolute top-0 left-0 w-full pt-16 text-center z-10 pointer-events-none">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 pointer-events-auto">
             <ShinyText 
              text="为什么选择迷迭尔？" 
              disabled={false} 
              speed={4} 
              className="" 
              color="#1f2937" 
              shineColor="#4ade80" 
            />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto pointer-events-auto">
            <EditableText id="why_desc" defaultText="我们坚持使用天然代糖，拒绝反式脂肪酸，只为给您更安心的选择。" />
          </p>
        </div>

        <ScrollStack 
            itemDistance={50} 
            itemScale={0.05} 
            itemStackDistance={30} 
            stackPosition="25%" 
            scaleEndPosition="15%" 
            baseScale={0.9} 
            scaleDuration={0.4} 
            blurAmount={2}
            className="h-full bg-secondary/10"
        >
            {/* Card 1 */}
            <ScrollStackItem itemClassName="p-0 bg-transparent border-none shadow-none">
                <SpotlightCard className="p-10 rounded-3xl bg-white border border-black/5 shadow-sm h-full flex flex-col items-center text-center" spotlightColor="rgba(0, 229, 255, 0.1)">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <Leaf className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground"><EditableText id="feature_1_title" defaultText="真正零添加糖" /></h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        <EditableText id="feature_1_desc" defaultText="我们使用赤藓糖醇、罗汉果甜苷等天然代糖，不参与人体代谢，不引起血糖剧烈波动。适合控糖人群及生酮饮食者。" />
                    </p>
                    <div className="mt-8 w-full h-40 bg-gradient-to-b from-primary/5 to-transparent rounded-xl overflow-hidden relative">
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                    </div>
                </SpotlightCard>
            </ScrollStackItem>

            {/* Card 2 */}
            <ScrollStackItem itemClassName="p-0 bg-transparent border-none shadow-none">
                <SpotlightCard className="p-10 rounded-3xl bg-white border border-black/5 shadow-sm h-full flex flex-col items-center text-center" spotlightColor="rgba(255, 200, 0, 0.1)">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                        <Zap className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground"><EditableText id="feature_2_title" defaultText="生酮友好" /></h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        <EditableText id="feature_2_desc" defaultText="高优质脂肪，适量蛋白质，极低碳水化合物。完美的生酮能量补给站。" />
                    </p>
                    <div className="mt-8">
                         <EditableLink id="feature_2_link" defaultText="查看生酮系列 →" defaultHref="/products/keto" className="text-primary font-semibold hover:underline" />
                    </div>
                </SpotlightCard>
            </ScrollStackItem>

            {/* Card 3 */}
            <ScrollStackItem itemClassName="p-0 bg-transparent border-none shadow-none">
                <SpotlightCard className="p-10 rounded-3xl bg-white border border-black/5 shadow-sm h-full flex flex-col items-center text-center" spotlightColor="rgba(0, 100, 255, 0.1)">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground"><EditableText id="feature_3_title" defaultText="清洁标签" /></h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        <EditableText id="feature_3_desc" defaultText="无防腐剂，无人工色素，配料表干净透明。我们承诺只使用您能读懂的食材。" />
                    </p>
                </SpotlightCard>
            </ScrollStackItem>

             {/* Card 4 */}
             <ScrollStackItem itemClassName="p-0 bg-transparent border-none shadow-none">
                <SpotlightCard className="p-10 rounded-3xl bg-white border border-black/5 shadow-sm h-full flex flex-col items-center text-center" spotlightColor="rgba(255, 0, 0, 0.1)">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                        <Heart className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground"><EditableText id="feature_4_title" defaultText="用心烘焙" /></h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        <EditableText id="feature_4_desc" defaultText="每日新鲜现做，保留食材最原本的风味。每一份甜点都倾注了烘焙师的心意。" />
                    </p>
                </SpotlightCard>
            </ScrollStackItem>

            {/* Final Card */}
            <ScrollStackItem itemClassName="bg-primary text-primary-foreground">
                <div className="flex flex-col items-center justify-center h-64 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        全部尽在迷迭尔！
                    </h2>
                    <Button 
                        variant="secondary" 
                        size="lg" 
                        className="rounded-full px-8 font-semibold text-lg"
                        onClick={() => navigate('/products')}
                    >
                        立即开启健康美味
                    </Button>
                </div>
            </ScrollStackItem>

        </ScrollStack>
      </section>

      {/* Product Showcase Preview */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                <ShinyText text="当季热销" speed={5} color="#1f2937" shineColor="#4ade80" />
            </h2>
            <div className="hidden sm:block">
                 <EditableLink id="view_all_products" defaultText="查看全部产品" defaultHref="/products" className="text-primary font-medium hover:underline underline-offset-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <AnimatedContent
                key={item}
                distance={30}
                direction="vertical"
                duration={0.5}
                delay={index * 0.1}
                threshold={0.1}
              >
                <div className="group/card cursor-pointer h-full">
                    <div className="aspect-square rounded-2xl bg-white mb-4 overflow-hidden relative border border-black/5 group/image shadow-sm hover:shadow-md transition-all">
                        <EditableImage 
                            id={`product_thumb_${item}`} 
                            defaultSrc={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=delicious+keto+cake+pastry+item+${item}+high+quality+studio+lighting+bright+airy&image_size=square`} 
                            alt="Product"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                        />
                    <div className="absolute bottom-4 right-4 translate-y-12 group-hover/image:translate-y-0 transition-transform duration-300">
                        <Button size="icon" className="rounded-full shadow-lg text-white hover:text-white border-none relative overflow-hidden bg-black/80 hover:bg-black w-10 h-10">
                            <ShoppingBag className="w-5 h-5 relative z-10" />
                        </Button>
                    </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover/card:text-primary transition-colors"><EditableText id={`product_name_${item}`} defaultText="经典原味生酮巴斯克" /></h3>
                    <p className="text-sm text-muted-foreground mb-2"><EditableText id={`product_tag_${item}`} defaultText="无面粉 / 0蔗糖" /></p>
                    <span className="font-medium text-primary">¥ <EditableText id={`product_price_${item}`} defaultText="128.00" /></span>
                </div>
              </AnimatedContent>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
             <EditableLink id="view_all_products_mobile" defaultText="查看全部产品 →" defaultHref="/products" className="text-primary font-medium hover:underline underline-offset-4" />
          </div>

          {/* Card Swap Section - Light Theme Redesign */}
          <div className="w-full py-24 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/3 space-y-8 text-left">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-600 mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
                                探索美味
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 text-foreground">
                                <EditableText id="swap_title_1" defaultText="健康生活" /><br />
                                <EditableText id="swap_title_2" defaultText="从未 如此简单" />
                            </h2>
                            <p className="text-xl text-muted-foreground font-medium">
                                <EditableText id="swap_subtitle" defaultText="看看我们的几款产品，总有你喜欢的！" />
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-black/5 hover:bg-black/5 transition-colors cursor-pointer shadow-sm" onClick={() => navigate('/flatbread')}>
                                <span className="text-base font-medium text-foreground">健康大饼</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-black/5 hover:bg-black/5 transition-colors cursor-pointer shadow-sm" onClick={() => navigate('/zero-sugar')}>
                                <span className="text-base font-medium text-foreground">零糖蛋糕</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                             <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-black/5 hover:bg-black/5 transition-colors cursor-pointer shadow-sm" onClick={() => navigate('/keto')}>
                                <span className="text-base font-medium text-foreground">生酮系列</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                    </div>

                    {/* Right Card Stack */}
                    <div className="w-full lg:w-2/3 h-[600px] flex items-center justify-center relative">
                        <CardSwap 
                            cardDistance={50} 
                            verticalDistance={75} 
                            delay={5000} 
                            skewAmount={6}
                            pauseOnHover={true}
                            width="100%"
                            height="500px"
                            onCardClick={(idx) => {
                                const routes = ['/keto', '/zero-sugar', '/flatbread'];
                                if (routes[idx]) navigate(routes[idx]);
                            }}
                        >
                            {/* Card 1: Keto */}
                            <Card customClass="bg-white border border-black/5 p-0 flex flex-col shadow-xl overflow-hidden group">
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-black/10 px-3 py-1.5 rounded-full text-xs font-bold text-foreground uppercase tracking-wider shadow-sm">
                                        <Zap className="w-3 h-3 text-yellow-500" />
                                        <span>生酮系列</span>
                                    </div>
                                </div>
                                <div className="h-3/5 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                                    <img 
                                        src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Keto+diet+high+fat+low+carb+food+bright+clean+photography&image_size=landscape_4_3" 
                                        alt="Keto" 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="h-2/5 w-full p-8 flex flex-col justify-between relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">燃烧脂肪的引擎</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            高优质脂肪，适量蛋白质，极低碳水化合物。完美的生酮能量补给站。
                                        </p>
                                    </div>
                                    <div className="flex items-center text-purple-600 text-sm font-semibold group-hover:text-purple-500 transition-colors">
                                        点击浏览详情 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Card>

                            {/* Card 2: Zero Sugar */}
                            <Card customClass="bg-white border border-black/5 p-0 flex flex-col shadow-xl overflow-hidden group">
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-black/10 px-3 py-1.5 rounded-full text-xs font-bold text-foreground uppercase tracking-wider shadow-sm">
                                        <Leaf className="w-3 h-3 text-green-500" />
                                        <span>零糖蛋糕</span>
                                    </div>
                                </div>
                                <div className="h-3/5 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                                    <img 
                                        src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Zero+sugar+cake+healthy+dessert+bright+minimalist+background&image_size=landscape_4_3" 
                                        alt="Zero Sugar" 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="h-2/5 w-full p-8 flex flex-col justify-between relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">甜蜜0负担</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            使用赤藓糖醇和罗汉果甜苷，0热量，0升糖指数，还原经典美味。
                                        </p>
                                    </div>
                                    <div className="flex items-center text-green-600 text-sm font-semibold group-hover:text-green-500 transition-colors">
                                        点击浏览详情 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Card>

                            {/* Card 3: Flatbread */}
                            <Card customClass="bg-white border border-black/5 p-0 flex flex-col shadow-xl overflow-hidden group">
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-black/10 px-3 py-1.5 rounded-full text-xs font-bold text-foreground uppercase tracking-wider shadow-sm">
                                        <ShieldCheck className="w-3 h-3 text-blue-500" />
                                        <span>健康大饼</span>
                                    </div>
                                </div>
                                <div className="h-3/5 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                                    <img 
                                        src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Healthy+flatbread+superfood+ingredients+bright+kitchen+background&image_size=landscape_4_3" 
                                        alt="Flatbread" 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="h-2/5 w-full p-8 flex flex-col justify-between relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">主食新选择</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            打破传统主食的高碳水魔咒，富含Omega-3和膳食纤维，每一口都是能量。
                                        </p>
                                    </div>
                                    <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-500 transition-colors">
                                        点击浏览详情 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Card>
                        </CardSwap>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center bg-white border-t border-black/5">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
             <ShinyText text="开始您的低糖之旅" speed={3} color="#1f2937" shineColor="#4ade80" />
          </h2>
          <p className="text-xl text-muted-foreground">
            <EditableText id="footer_cta_desc" defaultText="加入数万名健康饮食者的行列，体验身体轻盈的变化。" />
          </p>
          <div className="flex justify-center">
             <GlassButton as="div" variant="primary" className="h-14 text-lg p-0">
                <EditableLink 
                  id="footer_cta_btn" 
                  defaultText="立即选购" 
                  defaultHref="/products" 
                  className="flex items-center justify-center w-full h-full px-10 text-white"
                />
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;