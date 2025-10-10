'use client';

import { useState, useEffect } from 'react';

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const actions = [
    {
      icon: '📧',
      label: 'Email',
      href: 'mailto:dibildox.e@northeastern.edu',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emiliodibildox',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: '📱',
      label: 'Phone',
      href: 'tel:305-699-9713',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <div className={`flex flex-col space-y-4 mb-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {actions.map((action, index) => (
          <a
            key={action.label}
            href={action.href}
            target={action.label === 'LinkedIn' ? '_blank' : undefined}
            rel={action.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
            title={action.label}
          >
            <span className="text-lg">{action.icon}</span>
          </a>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-all duration-200 animate-fade-in-up"
        title={isOpen ? 'Close' : 'Contact Options'}
      >
        <svg 
          className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-all duration-200 mt-4 animate-fade-in-up"
        title="Scroll to Top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
