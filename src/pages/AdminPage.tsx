import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, ShoppingBag, Heart, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/context/AdminContext';

const AdminPage: React.FC = () => {
  const { setAdminMode, shinySettings, updateShinySettings } = useAdmin();
  const navigate = useNavigate();

  const pages = [
    { name: '首页 (Home)', path: '/', icon: <FileText className="w-5 h-5" /> },
    { name: '产品中心 (Products)', path: '/products', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: '健康学院 (Health)', path: '/health', icon: <Heart className="w-5 h-5" /> },
    { name: '关于我们 (About)', path: '/about', icon: <Users className="w-5 h-5" /> },
  ];

  const handleEdit = (path: string) => {
    setAdminMode(true);
    navigate(path);
  };

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <LayoutDashboard className="w-8 h-8 text-primary" />
              网站管理后台
            </h1>
            <p className="text-muted-foreground mt-2">
              点击下方页面即可跳转并开启可视化编辑模式。
            </p>
          </div>
          <Button variant="outline" asChild className="border-border text-foreground hover:bg-muted">
            <Link to="/">返回首页</Link>
          </Button>
        </header>

        {/* Global Shiny Settings Section */}
        <div className="bg-card p-6 rounded-xl shadow-sm border border-border mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-green-500 rounded-full"></span>
            全局特效设置 (Shiny Text)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Speed */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-foreground">流光速度 (Speed)</label>
                <span className="text-sm text-muted-foreground">{shinySettings.speed}s</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.1"
                value={shinySettings.speed}
                onChange={(e) => updateShinySettings({ speed: parseFloat(e.target.value) })}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Delay */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-foreground">动画延迟 (Delay)</label>
                <span className="text-sm text-muted-foreground">{shinySettings.delay}s</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={shinySettings.delay}
                onChange={(e) => updateShinySettings({ delay: parseFloat(e.target.value) })}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            * 这些设置将应用于全站所有使用流光特效的文字（颜色保持默认绿色）。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pages.map((page) => (
            <div key={page.path} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 text-lg font-medium text-foreground">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {page.icon}
                  </div>
                  {page.name}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                管理该页面的文本、图片和布局内容。
              </p>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => handleEdit(page.path)}
              >
                <div className="flex items-center justify-center gap-2">
                  前往编辑 <ExternalLink className="w-4 h-4" />
                </div>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">如何使用可视化编辑？</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-600 text-sm">
            <li>点击任意页面卡片上的“前往编辑”按钮，将自动进入<strong>编辑模式</strong>。</li>
            <li>页面右下角会显示管理工具栏，可以调节文字特效参数（速度、延迟等）。</li>
            <li>页面上可编辑的区域会出现蓝色边框，直接点击即可修改内容。</li>
            <li>修改完成后，内容会自动保存到本地（Local Storage）。</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
