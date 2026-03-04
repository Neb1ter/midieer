import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedList from './AnimatedList';
import './CardNav.css';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#1f2937',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const navigate = useNavigate();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 400; // Increased default height to accommodate scrolling lists

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        // Force reflow
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 400; // Adjusted for desktop height with lists
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.25,
      ease: 'power2.out'
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', stagger: 0.05 }, '-=0.15');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const closeMenu = () => {
    const tl = tlRef.current;
    if (!tl || !isExpanded) return;
    setIsHamburgerOpen(false);
    tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
    tl.reverse();
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <>
      {/* Overlay to click outside and close */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      
      <div className={`card-nav-container ${className}`}>
        <div 
          ref={navRef as any} 
          className={`card-nav ${isExpanded ? 'open' : ''} backdrop-blur-md bg-background/90 border border-border rounded-[50px] overflow-hidden shadow-xl`} 
        >
        <div className="card-nav-top">
          <div 
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`} 
            onClick={toggleMenu} 
            role="button" 
            aria-label={isExpanded ? 'Close menu' : 'Open menu'} 
            tabIndex={0} 
            style={{ color: menuColor || baseColor }} 
          > 
            <div className="hamburger-line" /> 
            <div className="hamburger-line" /> 
          </div> 

          <div className="logo-container">
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
               <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-serif">M</div>
               <span className="font-bold text-xl" style={{ color: baseColor }}>Midier</span>
            </Link>
          </div> 

          <button 
            type="button" 
            className="card-nav-cta-button" 
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }} 
            onClick={() => {
              navigate('/products');
              closeMenu();
            }}
          > 
            立即购买 
          </button> 
        </div> 

        <div className="card-nav-content" aria-hidden={!isExpanded}> 
          {(items || []).slice(0, 3).map((item, idx) => ( 
            <div
              key={`${item.label}-${idx}`} 
              className="nav-card rounded-[30px] bg-secondary/50 backdrop-blur-sm border border-border transition-all duration-300 flex flex-col overflow-hidden" 
              ref={setCardRef(idx) as any} 
              style={{ color: item.textColor || baseColor, height: '280px' }}
            > 
              <div className="nav-card-label text-xl font-bold mb-2 px-6 pt-6">{item.label}</div> 
              <div className="flex-1 overflow-hidden relative">
                <AnimatedList 
                  items={item.links.map(l => l.label)} 
                  onItemSelect={(_, index) => {
                    navigate(item.links[index].href);
                    closeMenu();
                  }}
                  itemClassName="hover:bg-muted rounded-lg transition-colors px-4 py-2"
                  displayScrollbar={true}
                  showGradients={true}
                />
              </div>
            </div> 
          ))} 
        </div> 
        </div> 
      </div>
    </>
  ); 
}; 

export default CardNav;