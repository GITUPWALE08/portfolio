import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableContentProps {
  children: React.ReactNode;
  collapsedHeight?: string | number;
  gradientFrom?: string; // e.g. 'from-surface' or 'from-background'
}

export function ExpandableContent({ 
  children, 
  collapsedHeight = '4.5rem',
  gradientFrom = 'from-background'
}: ExpandableContentProps) {
  const [expanded, setExpanded] = useState(false);
  const [isExpandable, setIsExpandable] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const checkHeight = () => {
      if (!contentRef.current) return;
      
      let targetHeight = 0;
      if (typeof collapsedHeight === 'number') {
        targetHeight = collapsedHeight;
      } else if (collapsedHeight.endsWith('rem')) {
        targetHeight = parseFloat(collapsedHeight) * 16;
      } else if (collapsedHeight.endsWith('px')) {
        targetHeight = parseFloat(collapsedHeight);
      }

      // Add a small buffer (e.g. 5px) to prevent appearing for tiny overlaps
      if (contentRef.current.scrollHeight > targetHeight + 5) {
        setIsExpandable(true);
      } else {
        setIsExpandable(false);
      }
    };

    const observer = new ResizeObserver(checkHeight);
    observer.observe(contentRef.current);
    
    // Initial check
    checkHeight();

    return () => observer.disconnect();
  }, [collapsedHeight]);

  return (
    <div className="flex flex-col">
      <motion.div
        initial={false}
        animate={{ height: (!isExpandable || expanded) ? 'auto' : collapsedHeight }}
        className="overflow-hidden relative"
      >
        <div ref={contentRef}>
          {children}
        </div>
        {(isExpandable && !expanded) && (
          <div className={`absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t ${gradientFrom} to-transparent pointer-events-none`} />
        )}
      </motion.div>
      {isExpandable && (
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1 mt-2 w-fit cursor-pointer"
        >
          {expanded ? (
            <>Read less <ChevronUp size={16} /></>
          ) : (
            <>Read more <ChevronDown size={16} /></>
          )}
        </button>
      )}
    </div>
  );
}
