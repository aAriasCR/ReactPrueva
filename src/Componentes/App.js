import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Personas, NotFound, AddPersonas } from "../Paginas/ExportPages";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/personas" component={Personas}/> 
            <Route exact path="/personas/add/:id" component={AddPersonas}/>
            <Route component={Personas} />
        </Switch> 
    </BrowserRouter>
)

export default App