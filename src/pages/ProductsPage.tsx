import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '@/components/ui/TiltedCard';
import EditableText from '@/components/ui/EditableText';
import AnimatedContent from '@/components/ui/AnimatedContent';

const ProductsPage: React.FC = () => {
  const products = [
    { id: 1, name: '经典原味生酮巴斯克', price: '128.00', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Classic+Keto+Basque+Cheesecake+on+a+plate+high+quality+food+photography&image_size=square' },
    { id: 2, name: '伯爵红茶生酮巴斯克', price: '138.00', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Earl+Grey+Keto+Basque+Cheesecake+slice+elegant+plating&image_size=square' },
    { id: 3, name: '宇治抹茶生酮巴斯克', price: '138.00', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Matcha+Keto+Basque+Cheesecake+green+tea+powder+topping&image_size=square' },
    { id: 4, name: '海盐奥利奥生酮卷', price: '48.00', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Sea+Salt+Oreo+Keto+Swiss+Roll+cake+slice&image_size=square' },
    { id: 5, name: '生椰拿铁生酮卷', price: '48.00', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Coconut+Latte+Keto+Swiss+Roll+coffee+beans+garnish&image_size=square' },
    { id: 6, name: '低碳黑巧慕斯', price: '58.00', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Low+Carb+Dark+Chocolate+Mousse+rich+texture+spoon&image_size=square' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4"><EditableText id="products_title" defaultText="产品中心" /></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <EditableText id="products_subtitle" defaultText="严选优质食材，坚持0蔗糖0面粉，为您带来无负担的甜蜜享受。" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedContent
                key={product.id}
                distance={50}
                direction="vertical"
                duration={0.6}
                delay={index * 0.1}
                scale={0.9}
                threshold={0.1}
            >
                <div className="h-full">
                    <TiltedCard
                    imageSrc={product.image}
                    altText={product.name}
                    captionText={product.name}
                    containerHeight="400px"
                    containerWidth="100%"
                    imageHeight="400px"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <div className="bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border w-full">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                            <EditableText id={`prod_name_${product.id}`} defaultText={product.name} />
                        </h3>
                        <div className="flex justify-between items-center">
                            <span className="text-primary font-bold text-lg">
                            ¥ <EditableText id={`prod_price_${product.id}`} defaultText={product.price} />
                            </span>
                            <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                            选购
                            </button>
                        </div>
                        </div>
                    }
                    />
                </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
