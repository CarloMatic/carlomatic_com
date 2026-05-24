import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Imprint } from './pages/Imprint';
import { Privacy } from './pages/Privacy';
import { LanguageProvider } from './context/LanguageContext';
import { CookieProvider } from './context/CookieContext';
import { CookieBanner } from './components/CookieBanner';
import { useAnalytics } from './hooks/useAnalytics';

function AnalyticsTracker() {
  useAnalytics();
  return null;
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <CookieProvider>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <CookieBanner />
        </CookieProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
