import Navbar from './navbar';
import Home from './home';
import Details from './details';
import Challenge from './challenge';
import Slack from './slack';
import Subscribe from './subscribe';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
       <Home></Home>
      </div>
      <div className="details">
      <Details></Details>
      </div>
      <div className="challenge">
        <Challenge></Challenge>
      </div>
      <div className="slack">
        <Slack></Slack>
      </div>
      <div className="subscribe">
        <Subscribe></Subscribe>
      </div>
      <hr/>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
