import React from 'react';
import { motion } from 'framer-motion';
import EditableText from '@/components/ui/EditableText';

const KetoPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              <EditableText id="keto_title" defaultText="生酮系列：燃烧脂肪的美味引擎" />
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              <EditableText id="keto_desc" defaultText="专为生酮饮食者打造，高脂肪、适量蛋白、极低碳水。让身体保持燃脂状态的同时，享受甜品的快乐。" />
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                <EditableText id="keto_feature_1" defaultText="优质脂肪来源" />
              </h3>
              <p className="text-muted-foreground">
                <EditableText id="keto_feature_1_desc" defaultText="选用新西兰草饲黄油、MCT油和椰子油，提供快速供能的优质脂肪，帮助快速进入生酮状态。" />
              </p>
            </div>
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                <EditableText id="keto_feature_2" defaultText="极低净碳水" />
              </h3>
              <p className="text-muted-foreground">
                <EditableText id="keto_feature_2_desc" defaultText="每份甜点净碳水低于5g，严格控制血糖波动，不破坏生酮状态。" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KetoPage;
