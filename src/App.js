import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
// import Content from "./Components/Content";
import Footer from './Components/Footer';


function App() {
  return (
        <div>
            <Header />
            {/* <Content /> */}
            <Footer />
        </div>
     );
}
export default App;
