import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Layout from './components/Layout';
import Works from './components/Works';
import './style.scss';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout/>} />
          <Route path='/about' element={<AboutMe/>} />
          <Route path='/works' element={<Works/>} />
          <Route path='/contact' element={<Contact/>} />
       </Routes>
       </BrowserRouter>
      </div>
    </>
  );
}

export default App;
