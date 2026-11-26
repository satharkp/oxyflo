import { RouterProvider, useRouter } from './router/Router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileContact from './components/layout/MobileContact';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import TechnologyPage from './pages/TechnologyPage';
import EstimatorPage from './pages/EstimatorPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function PageContent() {
  const { path } = useRouter();

  const renderCurrentPage = () => {
    // Individual product detail page: /products/:id
    if (path.startsWith('/products/')) {
      return <ProductDetailPage />;
    }

    switch (path) {
      case '/products':
        return <ProductsPage />;
      case '/about':
        return <AboutPage />;
      case '/technology':
        return <TechnologyPage />;
      case '/estimator':
        return <EstimatorPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafb] font-sans text-slate-900 flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
      <MobileContact />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <PageContent />
    </RouterProvider>
  );
}
