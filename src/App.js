import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Place from './Place';
import Header from './Components/Header'
import Footer from './Components/footer';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Place />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
