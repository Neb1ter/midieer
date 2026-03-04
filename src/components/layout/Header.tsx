import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/data/products'; // Import data for search
import FluidNav from '@/components/ui/FluidNav';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false); // Close search on route change
  }, [location]);

  // Filter products for search
  const searchResults = searchQuery.length > 0 
    ? PRODUCTS.filter(p => p.name.includes(searchQuery) || p.category.includes(searchQuery))
    : [];

  const handleSearchNavigate = (id: string) => {
    navigate(`/products/${id}`);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '产品中心', path: '/products' },
    { name: '健康学院', path: '/health' },
    { name: '关于我们', path: '/about' },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isMobileMenuOpen || isSearchOpen ? "glass bg-white/80 backdrop-blur-md border-b border-gray-200/50" : "bg-transparent border-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Fluid 3D Navigation for Desktop */}
          <FluidNav items={navLinks} currentPath={location.pathname} />

          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 z-50 relative pointer-events-auto">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-serif">M</div>
              <span>Midier</span>
            </Link>

            {/* Desktop Nav - Hidden visually but kept for structure/SEO if needed, or replaced entirely */}
            {/* We hide the original nav links because FluidNav takes over visually */}
            <nav className="hidden md:block w-full h-full absolute top-0 left-0 pointer-events-none opacity-0">
               {/* Spacer to keep layout structure if needed, or just rely on absolute positioning of FluidNav */}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4 z-50 pointer-events-auto">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Button size="sm" className="rounded-full px-6 bg-primary hover:bg-primary/90">
                购买
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-14 left-0 w-full bg-white border-b border-gray-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-4 py-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索产品 (例如: 巴斯克, 青团...)"
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Search Results */}
              {searchQuery && (
                <div className="max-w-2xl mx-auto mt-4 max-h-[60vh] overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 mb-2">找到 {searchResults.length} 个结果</p>
                      {searchResults.map(product => (
                        <div 
                          key={product.id}
                          onClick={() => handleSearchNavigate(product.id)}
                          className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors group"
                        >
                          <img src={product.image} alt={product.name} className="w-12 h-12 rounded-md object-cover" />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-primary">{product.name}</h4>
                            <p className="text-xs text-gray-500">{product.category}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      未找到相关产品
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-b border-gray-200/50 absolute w-full h-screen bg-white pt-4">
            <div className="px-4 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="block px-3 py-4 text-lg font-medium text-foreground hover:bg-secondary/50 rounded-xl border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center space-x-4 px-3">
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 h-12 text-lg">立即购买</Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
