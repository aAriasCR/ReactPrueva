import React from "react";
import PersonaForm from "../Componentes/PersonaForm";
import { useParams } from "react-router-dom";



const AddPersonas = () =>{   
    var state = {
        title: 'Crear Persona',
        id: useParams().id
    }

    if(state.id>0){
        state.title = 'Actualizar Persona'
    }

    return(
        <div className="continer">
            <div className="row">
                < div className="col-sm-2">
                </div>
                < div className="col-sm-10">
                    <h1>{state.title}</h1>
                </div>
            </div>
            <PersonaForm id={state.id}/>
        </div>
    )

};



export default AddPersonas