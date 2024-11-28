import Banner from './components/Banner';
import Project from './components/Project';
import Skills from './components/Skills';
import Header from './Header';
import './style.scss';

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Banner/>
        <Project/>
        <Skills />
     </div>
    </>
  );
}

export default App;
