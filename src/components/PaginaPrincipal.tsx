import React from 'react'
import Header from "./Header";
const PaginaPrincipal = () =>{
  return (
    <React.Fragment>
        <Header/>
        <div onClick={()=>{console.log('hola')}}>Hola</div>
    </React.Fragment>
  )
}

export default PaginaPrincipal