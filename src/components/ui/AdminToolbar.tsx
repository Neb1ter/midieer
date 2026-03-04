import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useLocation } from 'react-router-dom';
import { Eye } from 'lucide-react';

const AdminToolbar: React.FC = () => {
  const { isAdminMode, toggleAdminMode } = useAdmin();
  const location = useLocation();

  if (!isAdminMode) return null;

  // Don't show the exit button on the admin page itself
  if (location.pathname === '/admin') return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end font-sans">
      {/* Just the exit button, as settings are now in Admin Dashboard */}
      <button
        onClick={toggleAdminMode}
        className="p-4 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 flex items-center gap-2"
        title="Exit Edit Mode"
      >
        <Eye className="w-6 h-6" />
        <span className="font-bold pr-1">退出编辑</span>
      </button>
    </div>
  );
};

export default AdminToolbar;
