import ManzilXLanding from './components/ManzilXLanding';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ManzilXLanding />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;