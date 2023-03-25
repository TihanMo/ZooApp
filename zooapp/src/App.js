import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Impressum from './components/Impressum';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Impressum />
      <Footer/>
    </div>
  );
}

export default App;
