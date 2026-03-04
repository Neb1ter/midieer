import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ChevronLeft, Share2, Heart, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassButton from '@/components/ui/GlassButton';
import SpotlightCard from '@/components/ui/SpotlightCard';
import ShinyText from '@/components/ui/ShinyText';
import EditableText from '@/components/ui/EditableText';
import EditableImage from '@/components/ui/EditableImage';
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
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">未找到该产品</h2>
          <Button onClick={() => navigate('/products')}>返回产品列表</Button>
        </div>
      </div>
    );
  }

  // Helper to generate unique IDs for this product
  const pid = (suffix: string) => `product_${product.id}_${suffix}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header for Mobile/Quick Actions */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-4 lg:hidden text-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-muted rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="font-semibold">{product.name}</span>
        <button className="p-2 hover:bg-muted rounded-full">
          <Share2 className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-muted/20">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <EditableImage 
            id={pid('hero_image')}
            defaultSrc={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
        
        <div className="relative z-10 text-center text-foreground px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-background/50 backdrop-blur-sm text-sm font-medium mb-6 border border-border text-primary shadow-sm">
              <EditableText id={pid('category')} defaultText={product.category} />
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-sm">
              <EditableText id={pid('name')} defaultText={product.name} />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              <EditableText id={pid('desc')} defaultText={product.desc} />
            </p>
            <div className="flex items-center justify-center gap-4">
              <GlassButton variant="secondary" className="px-8 h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-lg hover:shadow-xl transition-all">
                立即购买 ¥<EditableText id={pid('price')} defaultText={String(product.price)} />
              </GlassButton>
              <GlassButton variant="outline" className="px-8 h-12 text-lg border-border bg-background/50 hover:bg-muted text-foreground">
                了解更多
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              <ShinyText 
                text="美味，无需妥协。" 
                speed={4} 
                color="#000000" 
                shineColor="#4ade80" 
              />
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              <EditableText 
                id={pid('story_intro')} 
                defaultText={`我们重新构想了 ${product.name} 的每一个细节。从原材料的甄选到烘焙工艺的革新，只为在剔除糖分的同时，保留最纯粹的味蕾享受。这不仅仅是一款食物，更是对健康生活方式的致敬。`}
              />
            </p>
            
            {/* New Rich Content Section inspired by Apple */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
               <div className="bg-card border border-border rounded-3xl p-8 h-96 flex flex-col justify-end overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow">
                 <EditableImage 
                    id={pid('rich_img_1')}
                    defaultSrc="https://images.unsplash.com/photo-1606312619070-d48b7065e44e?w=800&auto=format&fit=crop&q=80" 
                    alt="Ingredient" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                 <div className="relative z-10 text-white">
                   <h4 className="text-xl font-bold mb-2"><EditableText id={pid('rich_title_1')} defaultText="甄选顶级食材" /></h4>
                   <p className="text-sm text-gray-200"><EditableText id={pid('rich_desc_1')} defaultText="来自全球优质产区，确保每一口都是自然的馈赠。" /></p>
                 </div>
               </div>
               
               <div className="bg-card border border-border rounded-3xl p-8 h-96 flex flex-col justify-end overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow">
                 <EditableImage 
                    id={pid('rich_img_2')}
                    defaultSrc="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800&auto=format&fit=crop&q=80" 
                    alt="Process" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                 <div className="relative z-10 text-white">
                   <h4 className="text-xl font-bold mb-2"><EditableText id={pid('rich_title_2')} defaultText="大师级烘焙工艺" /></h4>
                   <p className="text-sm text-gray-200"><EditableText id={pid('rich_desc_2')} defaultText="20年经验甜点师亲手调配，精准控温，锁住风味。" /></p>
                 </div>
               </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Features Grid (Bento Box Style with Spotlight) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {product.features.map((feature, idx) => (
              <SpotlightCard
                key={idx}
                className={cn(
                  "p-8 h-full flex flex-col justify-between transition-all duration-300 border border-border shadow-sm",
                  idx === 0 ? "md:col-span-2 bg-primary text-primary-foreground border-primary" : "bg-card text-card-foreground hover:border-primary/50"
                )}
                spotlightColor={idx === 0 ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.05)"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h3 className={cn("text-2xl font-bold mb-4", idx === 0 ? "text-white" : "text-foreground")}>
                    <EditableText id={pid(`feature_${idx}_title`)} defaultText={feature.title} />
                  </h3>
                  <p className={cn("text-lg leading-relaxed", idx === 0 ? "text-primary-foreground/90" : "text-muted-foreground")}>
                    <EditableText id={pid(`feature_${idx}_desc`)} defaultText={feature.description} />
                  </p>
                  
                  {idx === 0 && (
                    <div className="mt-8 flex justify-end">
                      <Star className="w-12 h-12 text-white fill-current opacity-80" />
                    </div>
                  )}
                </motion.div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Parallax */}
      <section className="py-20 overflow-hidden bg-background">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
               <ShinyText text="产品图集" speed={3} color="#000000" shineColor="#4ade80" />
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             {product.images?.map((img, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="rounded-3xl overflow-hidden h-[400px] shadow-lg border border-border"
               >
                 <EditableImage 
                    id={pid(`gallery_${idx}`)}
                    defaultSrc={img} 
                    alt="Gallery" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" 
                 />
               </motion.div>
             ))}
             {(!product.images || product.images.length === 0) && (
                <div className="col-span-full text-center text-muted-foreground py-10">暂无更多图片</div>
             )}
           </div>
         </div>
      </section>

      {/* Specs & Buy Footer */}
      <section className="py-20 border-t border-border bg-muted/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">规格参数</h3>
              <div className="space-y-4">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground"><EditableText id={pid(`spec_label_${idx}`)} defaultText={spec.label} /></span>
                    <span className="font-medium text-foreground"><EditableText id={pid(`spec_value_${idx}`)} defaultText={spec.value} /></span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-3xl sticky top-24 shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground"><EditableText id={pid('footer_name')} defaultText={product.name} /></h3>
                  <div className="flex items-center mt-2 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-foreground font-medium">{product.rating}</span>
                    <span className="ml-1 text-muted-foreground text-sm">(200+ 评价)</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary">¥<EditableText id={pid('footer_price')} defaultText={String(product.price)} /></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button className="flex-1 h-12 rounded-xl text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all">
                    加入购物车
                  </Button>
                  <Button variant="outline" className="h-12 w-12 rounded-xl p-0 flex items-center justify-center border-border text-foreground hover:bg-muted">
                    <Heart className="w-6 h-6" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-4 mt-4">
                  <span className="flex items-center"><Check className="w-3 h-3 mr-1 text-primary" /> 顺丰冷链</span>
                  <span className="flex items-center"><Check className="w-3 h-3 mr-1 text-primary" /> 坏单包赔</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Product Navigation (Simple) */}
      <div className="py-12 text-center border-t border-border bg-background">
         <Button variant="link" onClick={() => navigate('/products')} className="text-muted-foreground hover:text-primary text-lg">
           查看所有产品 <ArrowRight className="ml-2 w-5 h-5" />
         </Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
