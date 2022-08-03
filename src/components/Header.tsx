import React, { useState } from 'react'
import {Ocultar} from './GlobalFunctions'


const Header = () =>{
  let contador:number = 1;

  const Desplegar = ()=>{
    Ocultar("Header-Options-Menu","removeMenu","showMenu")
    Ocultar("Header-Options-ContentBurger-Burger","Burger","across")
    if(contador%2==0){
      Ocultar("Header-Options-Menu","showMenu","removeMenu")
      Ocultar("Header-Options-ContentBurger-Burger","across","Burger")
    }
    contador++;
  }
 
  const Retirar = ()=>{
    Ocultar("Header-Options-Menu","showMenu","removeMenu")
    Ocultar("Header-Options-ContentBurger-Burger","across","Burger")
    contador++;
  }

  return (
    <div className='Content-Header'>
      <nav className='Content-Header-Top'>        
        <div className="Header-Options">
          <div id='Header-Options-ContentBurger' className="Header-Options-ContentBurger" onClick={()=>Desplegar()}>
            <div id='Header-Options-ContentBurger-Burger' className="Burger"></div>
          </div>
          <ul id='Header-Options-Menu' className="Header-Options-Menu" onMouseLeave={()=>Retirar()}>
            <li className="Header-Options-Menu-option">
              <h3>Home</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <img src="./images/usuario.png" height="30" alt="imagen por defecto" />
              <h3>Cuenta</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <h3>Episodios Completos</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <h3>Eventos</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <h3>Wiki</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <h3>Noticias</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <h3>Avatar</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <h3>Shop</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <h3>Juegos</h3> 
            </li>
            <li className="Header-Options-Menu-option">
              <h3>Forum</h3> 
            </li>
          </ul>
        </div>
        <div className='Header-Logo'>
          <img width="50" src="./images/sp_logo.png" alt="logo de south park" />
          <h2>SOUTH PARK</h2>
        </div>
        <div className='Header-Search'>
          <img src="./images/usuario.png" width="25" alt="logo del usuario" />
          <img src="./images/lupa.png" width="25" alt="logo del lupa" />
        </div>
      </nav>
      <ul id='Content-Header-bottom' className="Content-Header-bottom" onMouseLeave={()=>Retirar()}>
        <li className="Content-Header-bottom-option">
          <h3>Episodios Completos</h3>  
          <div className="Content-Header-bottom-option-content">
            <div className="Content-Header-bottom-option-content-item">
              Episodios en Ingles
            </div>
            <div className="Content-Header-bottom-option-content-item">
              Episodio Aleatorio
            </div>
            <div className="Content-Header-bottom-option-content-item">
              Colecciones en Ingles
            </div>
            <div className="Content-Header-bottom-option-content-item">
              Episodios Completos
            </div>
          </div>         
        </li>
        <li className="Content-Header-bottom-option">
          <h3>Eventos</h3> 
        </li>
        <li className="Content-Header-bottom-option">
          <h3>Wiki</h3> 
        </li>
        <li className="Content-Header-bottom-option">
          <h3>Noticias</h3> 
        </li>
        <li className="Content-Header-bottom-option">
          <h3>Avatar</h3> 
        </li>
        <li className="Content-Header-bottom-option">
          <h3>Shop</h3> 
        </li>
        <li className="Content-Header-bottom-option">
          <h3>Juegos</h3> 
        </li>
        <li className="Content-Header-bottom-option">
          <h3>Forum</h3> 
        </li>
      </ul>   
    </div>    
  )
}

export default Header