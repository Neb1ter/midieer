import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { cn } from '@/lib/utils';
import { Pencil } from 'lucide-react';

interface EditableTextProps {
  id: string; // Unique ID for storage
  defaultText: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const EditableText: React.FC<EditableTextProps> = ({ 
  id, 
  defaultText, 
  className, 
  as: Component = 'span' 
}) => {
  const { isAdminMode, updateContent, getContent } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(defaultText);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Sync with global state
  useEffect(() => {
    setCurrentText(getContent(id, defaultText));
  }, [id, defaultText, getContent]);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
    updateContent(id, currentText);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setCurrentText(getContent(id, defaultText)); // Revert
    }
  };

  if (isEditing) {
    return (
      <textarea
        ref={inputRef}
        value={currentText}
        onChange={(e) => {
          setCurrentText(e.target.value);
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={cn(
          "bg-background border-2 border-primary rounded px-1 outline-none resize-none overflow-hidden min-w-[100px] w-full text-foreground",
          className
        )}
        style={{
            font: 'inherit',
            lineHeight: 'inherit',
            // color: 'inherit', // Let className handle it
        }}
      />
    );
  }

  if (isAdminMode) {
    return (
      <Component 
        onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            setIsEditing(true);
        }}
        className={cn(
          "cursor-pointer border-2 border-dashed border-primary/50 hover:border-primary hover:bg-primary/5 rounded px-1 relative group transition-all",
          className
        )}
        title="Click to edit"
      >
        {currentText}
        <span className="absolute -top-3 -right-3 bg-primary text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Pencil className="w-3 h-3" />
        </span>
      </Component>
    );
  }

  return (
    <Component className={className}>
      {currentText}
    </Component>
  );
};

export default EditableText;
