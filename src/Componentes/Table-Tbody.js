import React from 'react'
import TableColum from  '../Componentes/TableColum'

class TableTBody extends React.Component{
    render(){
        const  {Cuerpo, update, DeletePer} = this.props
        return (
            <tbody>
                {   
                    Cuerpo.map( (tbody, i) =>
                        <TableColum key={i} col = {tbody} update={update} DeletePer={DeletePer}/>
                    )
                }
        </tbody>
        )
    }
}

export default TableTBody