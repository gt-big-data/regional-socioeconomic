import React from 'react';
import DropDownClass from "./components/DropDownClass";
import { Container } from "semantic-ui-react";
import {countries} from "./dataFiles/countries";

const App = () => {
    return (
        <Container>
            <DropDownClass />
        </Container>
    )
}

export default App;