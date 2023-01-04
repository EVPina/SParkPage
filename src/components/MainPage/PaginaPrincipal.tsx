import React from 'react'
import Header from "../Header";
import Footer from "../Footer";
import "../sass/MainPage.scss";
import Episodes from './Episodes';
import News from './News';
import { rootspkimage } from "../GlobalFunctions";
const PaginaPrincipal = () =>{
  return (
    <React.Fragment>
        <Header/>
        <main className='MainContent'>
          <div className='PrincipalImage'>
            <img src="./images/spark/Gxh.gif" alt="imagen principal" />
            <button className='PrincipalImage__button'>Nueva Coleccion</button>
          </div>
          <Episodes rootspkimage={rootspkimage} />
          <News rootspkimage={rootspkimage}/>
          <div className='MainContent-Cargarbtn'>
            <button type='button'>Cargas Mas</button>
          </div>
        </main>
        <Footer />
    </React.Fragment>
  )
}

export default PaginaPrincipal