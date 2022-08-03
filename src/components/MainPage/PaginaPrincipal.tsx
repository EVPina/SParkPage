import React from 'react'
import Header from "../Header";
import Footer from "../Footer";
import "../sass/MainPage.scss";
import Episodes from './Episodes';
import News from './News';

const PaginaPrincipal = () =>{
  return (
    <React.Fragment>
        <Header/>
        <main className='MainContent'>
          <div className='PrincipalImage'>
            <img src="https://i.pinimg.com/originals/5d/29/c3/5d29c3808716993edf5465c0455b4772.gif" alt="imagen principal" />
            <button className='PrincipalImage__button'>Nueva Coleccion</button>
          </div>
          <Episodes/>
          <News/>
          <div className='MainContent-Cargarbtn'>
            <button type='button'>Cargas Mas</button>
          </div>
        </main>
        <Footer />
    </React.Fragment>
  )
}

export default PaginaPrincipal