import React from 'react';
import { motion } from 'framer-motion';
import EditableText from '@/components/ui/EditableText';

const FlatbreadPage: React.FC = () => {
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
              <EditableText id="flatbread_title" defaultText="健康大饼：主食新选择" />
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              <EditableText id="flatbread_desc" defaultText="打破传统主食的高碳水魔咒，用超级食物重新定义大饼。高纤维、低GI，每一口都是满满的能量。" />
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
              <h3 className="text-2xl font-bold mb-4 text-yellow-700">
                <EditableText id="flatbread_feature_1" defaultText="超级食材" />
              </h3>
              <p className="text-muted-foreground">
                <EditableText id="flatbread_feature_1_desc" defaultText="融合奇亚籽、亚麻籽和洋车前子壳粉，富含Omega-3和膳食纤维，促进肠道蠕动。" />
              </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
              <h3 className="text-2xl font-bold mb-4 text-yellow-700">
                <EditableText id="flatbread_feature_2" defaultText="百变吃法" />
              </h3>
              <p className="text-muted-foreground">
                <EditableText id="flatbread_feature_2_desc" defaultText="既可以作为早餐主食，也可以搭配沙拉、烤肉，或者制作成低碳披萨底，满足您的多种烹饪需求。" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlatbreadPage;
