
import './App.css';
import Header from './components/header/header';
import Stepper from './components/stepper/stepper';
import Customers from './components/customers/customers';
import Footer from './components/footer/footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Stepper></Stepper>
      <Customers></Customers>
      <Footer></Footer>
    </div>
  );
}

export default App;
