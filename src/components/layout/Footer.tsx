import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinks = {
    "探索": ["生酮系列", "零糖蛋糕", "零糖青团", "健康大饼"],
    "关于": ["品牌故事", "招贤纳士", "新闻动态", "联系我们"],
    "服务": ["账户管理", "订单状态", "配送政策", "退换货说明"],
    "健康": ["控糖指南", "生酮食谱", "营养计算器", "常见问题"],
  };

  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-serif">M</div>
              <span>Midier</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              专注于低GI和控糖食品，为您提供健康美味的生酮及零糖饮食方案。
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 迷迭尔 Midier. 保留所有权利。</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/admin" className="hover:text-foreground">管理后台</Link>
            <a href="#" className="hover:text-foreground">隐私政策</a>
            <a href="#" className="hover:text-foreground">使用条款</a>
            <a href="#" className="hover:text-foreground">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
