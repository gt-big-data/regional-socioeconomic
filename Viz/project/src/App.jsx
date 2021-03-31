import React from 'react';
import MainPageClass from './components/MainPageClass';
import { Container } from "semantic-ui-react";
import {countries} from "./dataFiles/countries";
import index from './index.css'
import ReactLogo from './components/us.svg';
import DropDownClass from "./components/DropDownClass";
import MapDisplayClass from "./components/MapDisplayClass";

const App = () => {
    return (
        
        <Container>
            <div className = "Title"> 
                <h1>Regional Socioeconomic Project</h1>
            </div>

            <MainPageClass/>
            
        </Container>
    )
}

export default App;