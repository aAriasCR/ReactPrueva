import React from 'react'

class TableThead extends React.Component{
    render(){
        const  {Encabezado} = this.props
        return (
            <thead>
            <tr>
                {
                    Encabezado.map( (thead,i) => 
                        <th scope="col" key={i}>{thead}</th>
                    )
                }
            </tr>
        </thead>
        )
    }
}

export default TableThead