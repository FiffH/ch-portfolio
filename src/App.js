import './App.css';
import LandingTitle from './components/Landing'
import TechPage from './components/Technologies'

const App = () => {
  return (
    <div className="App">
      <LandingTitle />
      <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,166 0,166 C 108.57142857142858,135.96428571428572 217.14285714285717,105.92857142857142 335,121 C 452.85714285714283,136.07142857142858 579.9999999999999,196.25 700,198 C 820.0000000000001,199.75 932.8571428571429,143.07142857142858 1055,128 C 1177.142857142857,112.92857142857142 1308.5714285714284,139.46428571428572 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#16213e88" class="transition-all duration-300 ease-in-out delay-150"></path><path d="M 0,500 C 0,500 0,333 0,333 C 109.53571428571428,328.75 219.07142857142856,324.5 330,311 C 440.92857142857144,297.5 553.25,274.75 681,272 C 808.75,269.25 951.9285714285713,286.5 1081,300 C 1210.0714285714287,313.5 1325.0357142857142,323.25 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#16213eff" class="transition-all duration-300 ease-in-out delay-150"></path></svg>
      <TechPage />
    </div>
    
  );
}

export default App;
