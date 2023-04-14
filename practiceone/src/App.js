
import './App.css';
import Bar from './Bar';
import Home from './Home';
import Point from './Points';
import Blog from './Blog';
import Nation from './Nation';



function App() {

  // const birth = 'Tomorrow is Eunita Birthday';
  // const link = 'https://www.google.com';
  return (
    <div className="App">
      <Bar />
        <div className="content">
          <Home />
        </div>
        <div className="point">
          <Point />
        </div>
        <div className="blog">
          <Blog />
        </div>
        <div className='Nation'>
          <Nation />
        </div>
    </div>

  );
}

export default App;
