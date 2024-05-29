import './App.css';
import{ BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home'; 
import Dashbord from './pages/Dashbord';
import CoinPage from './pages/Coin';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashbord" element={<Dashbord />}/>
      <Route path="/coin/:id" element={<CoinPage />}/>
      {/*<Route path="/compare" element={<ComparePage />}/>
      <Route path="/watchlist" element={<WatchlistPage />}/> */}
     </Routes>
     </BrowserRouter>
    </div>
  ); 
}

export default App;
