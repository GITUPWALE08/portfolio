import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Resume } from './pages/Resume';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
