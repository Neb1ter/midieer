import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface EditableLinkProps {
  id: string;
  defaultText: string;
  defaultHref: string;
  className?: string;
}

const EditableLink: React.FC<EditableLinkProps> = ({
  id,
  defaultText,
  defaultHref,
  className,
}) => {
  const { isAdminMode, getContent, updateContent } = useAdmin();
  const [text, setText] = useState(defaultText);
  const [href, setHref] = useState(defaultHref);

  useEffect(() => {
    const savedData = getContent(id, '');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setText(parsed.text || defaultText);
        setHref(parsed.href || defaultHref);
      } catch (e) {
        console.error("Failed to parse saved link data", e);
      }
    }
  }, [id, getContent, defaultText, defaultHref]);

  const handleClick = (e: React.MouseEvent) => {
    if (isAdminMode) {
      e.preventDefault();
      const newText = prompt('Enter link text:', text);
      if (newText === null) return;
      
      const newHref = prompt('Enter link URL:', href);
      if (newHref === null) return;

      setText(newText);
      setHref(newHref);
      updateContent(id, JSON.stringify({ text: newText, href: newHref }));
    }
  };

  const Component = href.startsWith('http') ? 'a' : Link;
  const props = href.startsWith('http') ? { href, target: "_blank", rel: "noopener noreferrer" } : { to: href };

  return (
    // @ts-ignore - dynamic component props
    <Component
      {...props}
      className={cn(
        className,
        isAdminMode && "cursor-pointer border-b-2 border-dashed border-blue-500 hover:text-blue-600"
      )}
      onClick={handleClick}
    >
      {text}
      {isAdminMode && <span className="ml-1 text-[10px] text-blue-500 font-normal">(Edit Link)</span>}
    </Component>
  );
};

export default EditableLink;
