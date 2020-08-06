import React from "react";
import TableThead from '../Componentes/Table-Thead';
import TableTBody from '../Componentes/Table-Tbody';
import {BasePaht} from '../Clases/Constantes';



class Personas extends React.Component{

    state = {
        data:[],
        deleteResult: false
    }
    
    handleAddPersonas = (id) => {
        this.props.history.push(`/personas/add/${id}`);
    }  

    async componentDidMount(){
        await this.fetchPersonas()
    }

    fetchPersonas = async () => {
        let url = `${BasePaht}GetAllPerson`
        let res = await fetch(url)
        let data = await res.json()
        this.setState({
            data
        })
    }

    FetchDeletePersona = async(id) => {

        let url = `${BasePaht}DeletePerson`
        let res = await fetch(`${url}?id=${id}`)
        let data = await res.json()
        console.log(data)
        this.fetchPersonas()

    }

    render(){
        var Encabezados = ["Id", "Nombre", "Edad", "Nacimiento", "Opciones"]
        return (
            <div className="continer">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6"> 
                        <h3>Tabla Personas</h3>
                    </div>
                    <div className="col-sm-2"> 
                        <button type="button" className="btn btn-primary" onClick={this.handleAddPersonas.bind(this,0)}>Add Personas</button>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                    <table className="table">
                        <TableThead Encabezado={Encabezados}/>
                        <TableTBody Cuerpo={this.state.data} update={this.handleAddPersonas} DeletePer={this.FetchDeletePersona} />
                    </table>
                
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        )
    }
}

export default Personas