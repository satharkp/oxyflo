import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
  params: {}
});

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    // Check hash-based path or pathname
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      return hash.slice(1);
    }
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#/')) {
        setCurrentPath(hash.slice(1));
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (newPath) => {
    if (newPath === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      window.history.pushState({}, '', newPath);
    } catch {
      window.location.hash = '#' + newPath;
    }
    setCurrentPath(newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute route params if matching /products/:id
  let params = {};
  if (currentPath.startsWith('/products/')) {
    const id = currentPath.replace('/products/', '').split(/[?#]/)[0];
    if (id) {
      params.id = id;
    }
  }

  return (
    <RouterContext.Provider value={{ path: currentPath, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ href, className = '', children, onClick, style, ...props }) {
  const { navigate, path } = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    // If it's an external link or anchor on the same page
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }
    if (href.startsWith('#') && !href.startsWith('#/')) {
      return;
    }
    e.preventDefault();
    navigate(href.startsWith('#/') ? href.slice(1) : href);
  };

  const isActive = path === href || (href !== '/' && path.startsWith(href));

  return (
    <a
      href={href}
      onClick={handleClick}
      className={typeof className === 'function' ? className({ isActive }) : className}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
}

