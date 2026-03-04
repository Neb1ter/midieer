import React from 'react';
import CardNav, { CardNavItem } from '@/components/ui/CardNav';

const Header: React.FC = () => {
  const navItems: CardNavItem[] = [
    {
      label: '探索产品',
      bgColor: '#16a34a', // Primary Green
      textColor: '#ffffff',
      links: [
        { label: '全部产品', href: '/products', ariaLabel: 'View all products' },
        { label: '生酮系列', href: '/products?category=keto', ariaLabel: 'View keto products' },
        { label: '零糖蛋糕', href: '/products?category=cake', ariaLabel: 'View sugar-free cakes' },
        { label: '健康大饼', href: '/products?category=bread', ariaLabel: 'View healthy bread' },
      ],
    },
    {
      label: '健康学院',
      bgColor: '#f3f4f6', // Light Gray
      textColor: '#1f2937',
      links: [
        { label: '最新文章', href: '/health', ariaLabel: 'Read latest articles' },
        { label: '生酮指南', href: '/health/keto-guide', ariaLabel: 'Keto guide' },
        { label: '控糖技巧', href: '/health/sugar-control', ariaLabel: 'Sugar control tips' },
      ],
    },
    {
      label: '关于我们',
      bgColor: '#e5e7eb', // Slightly darker gray for contrast but still light
      textColor: '#1f2937',
      links: [
        { label: '品牌故事', href: '/about', ariaLabel: 'Brand story' },
        { label: '联系我们', href: '/about#contact', ariaLabel: 'Contact us' },
        { label: '加入我们', href: '/about#careers', ariaLabel: 'Join us' },
      ],
    },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <CardNav 
        items={navItems} 
        baseColor="#1f2937" // Dark text for light mode
        menuColor="#1f2937" // Dark menu icon
        buttonBgColor="#16a34a"
        buttonTextColor="#ffffff"
      />
    </div>
  );
};

export default Header;
