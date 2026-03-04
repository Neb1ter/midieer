import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { cn } from '../../lib/utils';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  id: string; // Unique ID for storage
  defaultSrc: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ 
  id, 
  defaultSrc, 
  className, 
  alt,
  ...props 
}) => {
  const { isAdminMode, getContent, updateContent } = useAdmin();
  const [src, setSrc] = useState(defaultSrc);

  useEffect(() => {
    const savedSrc = getContent(id, defaultSrc);
    if (savedSrc) {
      setSrc(savedSrc);
    }
  }, [id, defaultSrc, getContent]);

  const handleClick = (e: React.MouseEvent) => {
    if (!isAdminMode) return;
    
    e.preventDefault();
    const newSrc = prompt('Enter new image URL:', src);
    if (newSrc !== null && newSrc !== src) {
      setSrc(newSrc);
      updateContent(id, newSrc);
    }
  };

  return (
    <div className={cn("relative group", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all",
          isAdminMode && "cursor-pointer hover:opacity-80 ring-2 ring-transparent hover:ring-blue-500"
        )}
        onClick={handleClick}
        {...props}
      />
      {isAdminMode && (
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Edit Image
        </div>
      )}
    </div>
  );
};

export default EditableImage;
