import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MyRoutes from './components/config/MyRoutes';

function App() {
  return (
    <div className="App">
     <Header/>
     <MyRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
