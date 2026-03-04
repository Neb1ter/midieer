import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Leaf, Target, MapPin, Mail, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { label: "成立年份", value: "2018" },
    { label: "服务用户", value: "50W+" },
    { label: "研发产品", value: "100+" },
    { label: "线下门店", value: "20+" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=1200&auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            关于 Midier
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light"
          >
            致力于让健康饮食不再枯燥，用科技与匠心重新定义"甜蜜"。
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=60" 
                alt="Baking Process" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">品牌故事</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Midier 迷迭尔的故事始于一个简单的愿望：为什么健康和美味不能兼得？
                </p>
                <p>
                  创始人作为一名资深甜品师，在确诊糖耐量受损后，不得不告别热爱的甜点。这段经历让他萌生了创立一个专注于"无负担甜品"品牌的想法。
                </p>
                <p>
                  经过三年的研发，测试了上千种代糖配方，我们终于找到了赤藓糖醇、罗汉果甜苷与优质食材的黄金比例。我们坚持使用法国进口稀奶油、比利时黑巧和当季新鲜水果，拒绝反式脂肪酸。
                </p>
                <p>
                  如今，Midier 已经成为低糖饮食领域的先锋品牌，我们希望通过每一份产品，传递"自律给人自由"的生活态度。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                key={stat.label}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">我们坚持的每一项原则，都是为了给您提供更优质的体验</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">天然纯净</h3>
              <p className="text-gray-500">坚持使用天然食材，0添加防腐剂，0添加人工色素。</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">匠心工艺</h3>
              <p className="text-gray-500">每一道工序都严格把控，传承法式甜点工艺，追求极致口感。</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">用户至上</h3>
              <p className="text-gray-500">倾听每一位用户的反馈，持续改进产品，提供贴心服务。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-gray-900 text-white p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">联系我们</h2>
              <p className="text-gray-400 mb-12">
                无论您有任何建议、合作意向还是产品疑问，都欢迎随时与我们联系。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">公司地址</div>
                    <div className="font-medium">上海市静安区南京西路 888 号</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">商务合作</div>
                    <div className="font-medium">business@midier.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">客服热线</div>
                    <div className="font-medium">400-123-4567</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 h-80 md:h-auto bg-gray-200 relative">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60" 
                 alt="Office" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
