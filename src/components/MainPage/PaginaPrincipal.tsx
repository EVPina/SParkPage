import React from 'react'
import Header from "../Header";
import "../sass/MainPage.scss";

const PaginaPrincipal = () =>{
  return (
    <React.Fragment>
        <Header/>
        <div className='PrincipalImage'>
          <img src="https://i.pinimg.com/originals/5d/29/c3/5d29c3808716993edf5465c0455b4772.gif" alt="imagen principal" />
          <button className='PrincipalImage__button'>Nueva Coleccion</button>
        </div>
    </React.Fragment>
  )
}

export default PaginaPrincipal