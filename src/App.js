import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './menupages/About';
import Layout from './components/Layout';
import './style.scss';
import Works from './menupages/Works';
import Contacts from './menupages/Contacts';
import BasicBreadcrumbs from './components/BasicBreadcrumbs';




function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
      {/* <BasicBreadcrumbs/> */}
       <Routes>
          <Route path='/' element={<Layout/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/works' element={<Works/>} />
          <Route path='/contacts' element={<Contacts/>} />
       </Routes>
       </BrowserRouter>
      </div>
    </>
  );
}

export default App;
