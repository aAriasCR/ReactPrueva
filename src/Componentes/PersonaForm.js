import React from "react";

import {BasePaht} from '../Clases/Constantes'
import { withRouter } from 'react-router'; 


class PersonasForm extends React.Component{


    constructor(props){
        super(props)
        this.Nombre = React.createRef()
        this.Edad = React.createRef()
        this.Fecha = React.createRef()
    }
    state = {
    }
    
    handleSubmit = async e => {
        e.preventDefault()
        let url = `${BasePaht}AddPerson`
        if(this.props.id > 0){
            url = `${BasePaht}UpdatePerson`
        }

        let form = {
            Id: this.props.id,
            Nombre: this.Nombre.current.value,
            Edad: this.Edad.current.value,
            Fecha: this.Fecha.current.value
        }

        let data = JSON.stringify(form)
        try {
            let config = {
                method: 'POST',
                body: data , 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: "json"
           }
            let Response = await fetch(url, config)
            let json = await Response.json()
            console.log(json)
            this.props.history.push('/personas')
            
        } catch (error) {
            console.log(error)
        }

    }

    GetPerson = async e =>{
        let url = `${BasePaht}GetPerson`
        try {
            let Response = await fetch(`${url}?Id=${this.props.id}`)
            let json = await Response.json()
            this.Nombre.current.value = json.nombre
            this.Edad.current.value = json.edad
            this.Fecha.current.value =  json.fecha
        } catch (error) {
            console.log(error)
        }
    }

    render(){

        if(this.props.id > 0){
            this.GetPerson()
        }
        
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <input type="text"  className="form-control" placeholder="Nombre" name="Nombre" ref={this.Nombre}  onChange={this.handleChange}/>
                    </div>
                    <div className="col-sm-6">
                        <input type="date"  className="form-control" placeholder="Nacimiento" name="Fecha" ref={this.Fecha} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <input type="number"  className="form-control" placeholder="Edad" name="Edad" ref={this.Edad} onChange={this.handleChange}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={this.hardleSumit}> Submit </button>
            </form>       
        </div>
        )
    }
}

export default withRouter(PersonasForm)