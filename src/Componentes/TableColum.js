import React from 'react'


class TableColum extends React.Component{
    render(){
        const  {col, update, DeletePer} = this.props
        return (
            <tr key={'col'+col.id}>
                <td key={'Id'+ col.id}> {col.id} </td> 
                <td key={'nombre'+ col.id}> {col.nombre} </td> 
                <td key={'edad'+ col.id}> {col.edad} </td> 
                <td key={'fecha'+ col.id}> {col.fecha} </td>
                <td key={'Opc'+ col.id}> 
                    <button key={'DelBtn'+ col.id} className="btn btn-danger" onClick={DeletePer.bind(this,col.id)}> Eliminar </button> 
                    <button key={'ModNtn'+ col.id} className="btn btn-primary" onClick={update.bind(this,col.id)} > Modificar </button>
                </td>
            </tr>
        )
    }
}

export default TableColum