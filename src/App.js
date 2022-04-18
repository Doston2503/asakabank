import React, {Component} from 'react';
import MyNavbar from "./component/MyNavbar";
import {BrowserRouter as Router,} from "react-router-dom";
import Header from "./component/Header";
import Section from "./component/Section";
import TabSection from "./component/TabSection";
import CalcSection from "./component/CalcSection";
import Footer from "./component/Footer";

class App extends Component {
    render() {
        return (
            <Router>
               <MyNavbar/>
               <Header/>
               <Section/>
               <TabSection/>
               <CalcSection/>
               <Footer/>
            </Router>
        );
    }
}

export default App;