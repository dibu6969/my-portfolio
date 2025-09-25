'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const navItems = ['About Me', 'Experience', 'Skills & Interests', 'Contact'];
  const [currentItem, setCurrentItem] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = navItems[currentItem];
    
    if (isTyping) {
      if (currentChar < currentText.length) {
        const timer = setTimeout(() => {
          setCurrentChar(currentChar + 1);
        }, 100); // Faster typing for nav
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait a bit then start erasing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      // Erasing
      if (currentChar > 0) {
        const timer = setTimeout(() => {
          setCurrentChar(currentChar - 1);
        }, 50); // Faster erasing
        return () => clearTimeout(timer);
      } else {
        // Finished erasing, move to next item
        setCurrentItem((currentItem + 1) % navItems.length);
        setIsTyping(true);
      }
    }
  }, [currentItem, currentChar, isTyping, navItems]);

  const currentText = navItems[currentItem];
  const displayedText = currentText.slice(0, currentChar);

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="text-white text-lg font-medium" style={{ fontFamily: 'var(--font-inter), ui-sans-serif, system-ui' }}>
        {displayedText}
        <span className="caret" />
      </div>
    </nav>
  );
}
