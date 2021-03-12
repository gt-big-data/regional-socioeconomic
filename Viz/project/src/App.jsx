import React from 'react';
import DropDownClass from "./components/DropDownClass";
import { Container } from "semantic-ui-react";
import {countries} from "./dataFiles/countries";
import index from './index.css'

const App = () => {
    return (
        
        <Container>
            <div className = "Title"> 
                <h1>Regional Socioeconomic Project</h1>
            </div>
            <DropDownClass />
        </Container>
    )
}

export default App;