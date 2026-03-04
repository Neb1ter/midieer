import React from 'react';
import { motion } from 'framer-motion';
import EditableText from '@/components/ui/EditableText';

const ZeroSugarPage: React.FC = () => {
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
              <EditableText id="zerosugar_title" defaultText="零糖蛋糕：甜蜜无负担" />
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              <EditableText id="zerosugar_desc" defaultText="拒绝蔗糖，拥抱健康。我们使用天然代糖，还原甜点的美妙口感，让您在控糖路上不再孤单。" />
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                <EditableText id="zerosugar_feature_1" defaultText="天然代糖" />
              </h3>
              <p className="text-muted-foreground">
                <EditableText id="zerosugar_feature_1_desc" defaultText="精选赤藓糖醇和罗汉果甜苷，0热量，0升糖指数，不参与人体代谢，安全健康。" />
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                <EditableText id="zerosugar_feature_2" defaultText="无面粉配方" />
              </h3>
              <p className="text-muted-foreground">
                <EditableText id="zerosugar_feature_2_desc" defaultText="使用杏仁粉和椰子粉替代传统面粉，富含膳食纤维，增加饱腹感，减少碳水摄入。" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ZeroSugarPage;
