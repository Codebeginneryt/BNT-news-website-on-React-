import './App.css';
import Blognews from './components/blognews';
import Boxnews from './components/boxnews';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Newsbanner from './components/newsbanner';
import Topnews from './components/topnews';

function App() {
  return (
    <>
    <Navbar />
    <Topnews />
    <Blognews />
    <Newsbanner />
    <Boxnews />
    <Footer />
    </>
  );
}

export default App;
