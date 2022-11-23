import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import { Routes, Route } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import DNE from './components/DNE';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='/*' element={<DNE />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
