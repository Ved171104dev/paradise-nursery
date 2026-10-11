import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import './App.css';

function LandingPage() {
  return (
    <main>
      <section className="landing-page">
        <div className="landing-container">
          <p className="landing-eyebrow">Bring nature home</p>
          <h1>Paradise Nursery</h1>
          <p>
            Discover beautiful, healthy houseplants selected to make every
            room feel fresh, calm, and alive.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </section>
      <AboutUs />
    </main>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
