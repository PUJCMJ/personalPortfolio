import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../../components/navbar';
import About from '../../components/about';
import Certificates from '../../components/certificates';
import Projects from '../../components/projects';
import Contact from '../../components/contact';
import MainLayout from '../../layouts/mainLayout';
import Home from '../home/index';


function App() {
  return (
    <BrowserRouter>
        <Navbar />  
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;