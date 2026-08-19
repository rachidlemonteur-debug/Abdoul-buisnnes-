'use client';

import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';

export type Animation3DVariant = '3d-flip' | '3d-card' | '3d-left' | '3d-right' | '3d-zoom' | 'standard';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  variant?: Animation3DVariant;
  once?: boolean;
  className?: string;
  id?: string;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  variant = '3d-card',
  once = true,
  className = '',
  id,
}: ScrollRevealProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [isIntersected, setIsIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsIntersected(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsIntersected(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '40px 0px 40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, prefersReducedMotion]);

  const isVisible = prefersReducedMotion || isIntersected;

  const getTransform = () => {
    if (prefersReducedMotion) return 'none';
    if (isVisible) {
      return 'perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)';
    }

    switch (variant) {
      case '3d-flip':
        return 'perspective(1200px) rotateX(18deg) translate3d(0, 30px, -40px) scale3d(0.95, 0.95, 0.95)';
      case '3d-card':
        return 'perspective(1200px) rotateX(14deg) translate3d(0, 24px, -30px) scale3d(0.96, 0.96, 0.96)';
      case '3d-left':
        return 'perspective(1200px) rotateY(-12deg) translate3d(-30px, 0, -25px) scale3d(0.96, 0.96, 0.96)';
      case '3d-right':
        return 'perspective(1200px) rotateY(12deg) translate3d(30px, 0, -25px) scale3d(0.96, 0.96, 0.96)';
      case '3d-zoom':
        return 'perspective(1200px) translate3d(0, 20px, -60px) scale3d(0.92, 0.92, 0.92)';
      case 'standard':
      default:
        return direction === 'up'
          ? 'translate3d(0, 20px, 0)'
          : direction === 'down'
          ? 'translate3d(0, -20px, 0)'
          : 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      id={id}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transformStyle: 'preserve-3d',
        transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
