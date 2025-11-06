import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls to the top of the page
 * whenever the route changes. This fixes the issue where navigating
 * to a new page would maintain the previous scroll position.
 * 
 * Handles lazy-loaded routes by scrolling after a brief delay
 * to ensure content is rendered.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll for instant feedback
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Additional scroll after a short delay to handle lazy-loaded components
    // and ensure scroll position is maintained even after Suspense resolves
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

