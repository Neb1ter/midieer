import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
  setAdminMode: (mode: boolean) => void;
  updateContent: (key: string, value: string) => void;
  getContent: (key: string, defaultValue: string) => string;
  shinySettings: ShinySettings;
  updateShinySettings: (settings: Partial<ShinySettings>) => void;
}

export interface ShinySettings {
  speed: number;
  delay: number;
  spread: number;
  color: string;
  shineColor: string;
  direction: 'left' | 'right';
}

const defaultShinySettings: ShinySettings = {
  speed: 3,
  delay: 1.5,
  spread: 120,
  color: '#16a34a',
  shineColor: '#ffffff',
  direction: 'left'
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [contentMap, setContentMap] = useState<Record<string, string>>({});
  const [shinySettings, setShinySettings] = useState<ShinySettings>(defaultShinySettings);

  // Load saved content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      setContentMap(JSON.parse(savedContent));
    }
    const savedShiny = localStorage.getItem('shiny_settings');
    if (savedShiny) {
        setShinySettings(JSON.parse(savedShiny));
    }
  }, []);

  const toggleAdminMode = () => setIsAdminMode(prev => !prev);
  const setAdminMode = (mode: boolean) => setIsAdminMode(mode);

  const updateContent = (key: string, value: string) => {
    const newContent = { ...contentMap, [key]: value };
    setContentMap(newContent);
    localStorage.setItem('site_content', JSON.stringify(newContent));
  };
  
  const updateShinySettings = (settings: Partial<ShinySettings>) => {
      const newSettings = { ...shinySettings, ...settings };
      setShinySettings(newSettings);
      localStorage.setItem('shiny_settings', JSON.stringify(newSettings));
  };

  const getContent = (key: string, defaultValue: string) => {
    return contentMap[key] || defaultValue;
  };

  return (
    <AdminContext.Provider value={{ isAdminMode, toggleAdminMode, setAdminMode, updateContent, getContent, shinySettings, updateShinySettings }}>
      {children}
    </AdminContext.Provider>
  );
};
