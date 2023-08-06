import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AdminLogin from './pages/AdminLogin';
import DemandeList from './pages/DemandeList';
import AddTable from './pages/AddTable';
import TableauDetails from './pages/TableauDetails';
import './App.css';

const App = () => {
  const role = localStorage.getItem('role');
  const isAdmin = role === 'admin';

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/tableau/:id" element={<TableauDetails />} />

          {isAdmin && (
            <>
              <Route path="/demande" element={<DemandeList />} />
              <Route path="/addtable" element={<AddTable />} />
            </>
          )}
          {!isAdmin && <Route path="/*" element={<Navigate to="/admin" replace />} />}

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
