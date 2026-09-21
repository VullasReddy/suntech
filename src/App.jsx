import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicesIndexPage from './pages/ServicesIndexPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import FinancialServicesPage from './pages/FinancialServicesPage';
import OnlineMarketplacePage from './pages/OnlineMarketplacePage';
import BackendSupportPage from './pages/BackendSupportPage';
import LeadershipPage from './pages/LeadershipPage';
import CareersPage from './pages/CareersPage';
import SupportPage from './pages/SupportPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePage from './pages/CookiePage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLoader />
      <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesIndexPage />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/finance-sector" element={<FinancialServicesPage />} />
            <Route path="/online-marketplace" element={<OnlineMarketplacePage />} />
            <Route path="/backend-support" element={<BackendSupportPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookie" element={<CookiePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
