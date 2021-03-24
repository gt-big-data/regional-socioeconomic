import React from 'react';
import MainPageClass from './components/MainPageClass';
import { Container } from "semantic-ui-react";
import {countries} from "./dataFiles/countries";
import index from './index.css'
import Map from './components/Map';
import ReactLogo from './components/us.svg';

const App = () => {
    return (
        
        <Container>
            <DropDownClass />
            <div className = "Title"> 
                <h1>Regional Socioeconomic Project</h1>
            </div>
            <DropDownClass />

            <MainPageClass/>
        </Container>
    )
}

export default App;