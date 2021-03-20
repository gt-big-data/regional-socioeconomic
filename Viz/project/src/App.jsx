import React from 'react';
import DropDownClass from "./components/DropDownClass";
import { Container } from "semantic-ui-react";
import {countries} from "./dataFiles/countries";
import index from './index.css'
import mapDisplay from './components/mapDisplay';

const App = () => {
    return (
        
        <Container>
            <div className = "Title"> 
                <h1>Regional Socioeconomic Project</h1>
            </div>
            <DropDownClass />
            <mapDisplay />
        </Container>
    )
}

export default App;