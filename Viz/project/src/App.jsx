import React from 'react';
import DropDownClass from "./components/DropDownClass";
import { Container } from "semantic-ui-react";
import {countries} from "./dataFiles/countries";
import index from './index.css'
import Map from './components/Map';
import ReactLogo from './components/us.svg';

const App = () => {
    return (
        
        <Container>
            <div className = "Title"> 
                <h1>Regional Socioeconomic Project</h1>
            </div>
            <DropDownClass />
            <Map />
        </Container>
    )
}

export default App;