import React, { FormEvent, useState } from 'react'
import {Ocultar} from './GlobalFunctions'
const Footer = () =>{
    let contador = 0
    const [Correo,SetCorreo] = useState('')

    const Accept=()=>{
        document.getElementById('Footer-Content-Notificaciones-Form-checksubscrito-checkbox')!.classList.toggle('active');
        if(contador%2 === 0){
            document.getElementById(document.getElementById('Footer-Content-Notificaciones-Form-checksubscrito-checkbox')!.children[0].id)!.style.display = 'block'
            if(CheckButton(Correo)){
                Ocultar('Footer-Content-Notificaciones-Form-button','desactivebutton','activebutton')
                document.getElementById('Footer-Content-Notificaciones-Form-button')!.removeAttribute('disabled')
            }
        }else{
            document.getElementById(document.getElementById('Footer-Content-Notificaciones-Form-checksubscrito-checkbox')!.children[0].id)!.style.display = 'none'
            if(document.getElementById('Footer-Content-Notificaciones-Form-button')!.classList.contains('activebutton')){
                Ocultar('Footer-Content-Notificaciones-Form-button','activebutton','desactivebutton')
                document.getElementById('Footer-Content-Notificaciones-Form-button')!.setAttribute('disabled','')
            }
        }
        contador++
    }
    const CheckInput =(correo:string)=>{
        SetCorreo(correo);
        if(CheckButton(correo)){
            document.getElementById('Footer-Content-Notificaciones-Form-button')!.classList.add('activebutton')
            document.getElementById('Footer-Content-Notificaciones-Form-button')!.removeAttribute('disabled')
        }
        else{
            document.getElementById('Footer-Content-Notificaciones-Form-button')!.setAttribute('disabled','')
            if(document.getElementById('Footer-Content-Notificaciones-Form-button')!.classList.contains('activebutton')){
                Ocultar('Footer-Content-Notificaciones-Form-button','activebutton','desactivebutton')
            }
        }
    }
    const CheckButton =(correo:string)=>{
        if(document.getElementById('Footer-Content-Notificaciones-Form-checksubscrito-checkbox')!.classList.contains('active') &&  correo !== ''){
            return true;
        }
        return false;
    }
    const Enviar = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(CheckButton(Correo)){
            console.log('enviado');
        }else{
            console.log('no se envio');
        }
    }
    
    return (
        <footer className='Footer-Content'>
            <div className='Footer-Content-Description'>
                <h4>South Park</h4>
                <p>South Park es la serie animada galardonada con un Emmy sobre cuatro niños que viven en una ciudad de montaña de Colorado. Entre las tragedias locales y globales, así como la interferencia de padres y celebridades, Kyle, Stan, Cartman y Kenny logran pasar un buen rato.</p>
            </div>
            <div className='Footer-Content-Notificaciones'>
                <div className='Footer-Content-Notificaciones-Mensaje'>
                    <h5>Suscríbase para recibir anuncios y ofertas de South Park</h5>
                    <p>Sea uno de los primeros fanáticos en ser notificado de las noticias de South Park y obtenga ofertas exclusivas para los próximos eventos.</p>
                </div>
                <form className='Footer-Content-Notificaciones-Form'  onSubmit={(e)=>Enviar(e)}>
                    <input type="text" onChange={e=>CheckInput(e.target.value)} className='Footer-Content-Notificaciones-Form-Email' placeholder='Email'></input>
                    <input type="checkbox" name="subscrito" id="subscrito" />
                    <div className='Footer-Content-Notificaciones-Form-checksubscrito' id='Footer-Content-Notificaciones-Form-checksubscrito'>
                        <div onClick={()=>Accept()} className='Footer-Content-Notificaciones-Form-checksubscrito-checkbox' id='Footer-Content-Notificaciones-Form-checksubscrito-checkbox'>
                            <img id='Footer-Content-Notificaciones-Form-checksubscrito-checkbox-check' src="./images/cheque.png" alt="check" />
                        </div>
                        <span>
                            Al hacer clic en Suscribirse, acepta recibir boletines informativos de South Park y otros correos electrónicos de marketing. Los boletines están sujetos a nuestra <a href="/">Política de privacidad</a> y <a href="/">Términos de uso</a>. Los usuarios pueden darse de baja en cualquier momento. A.W.E.S.O.M. - O no se burlará de ti ni contará tus secretos a otras personas o cosas.
                        </span>
                    </div>
                    <button id='Footer-Content-Notificaciones-Form-button' type='submit' disabled>Suscribir</button>
                </form>
            </div>
            <div className='Footer-Content-Credits'>
                <div className='Footer-Content-Credits-Links'>
                    <ul>
                        <li><a href="">Biografía de creadores</a></li>
                        <li><a href="">Créditos de reparto y equipo</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Créditos web</a></li>
                        <li><a href="">Política de Privacidad</a></li>
                        <li><a href="">Términos de Uso</a></li>
                        <li><a href="">Show Disclaimer</a></li>
                        <li><a href="">Política de Cookies</a></li>
                        <li><a href="">No Vender Mi Información Personal</a></li>
                    </ul>
                </div>
                <div className='Footer-Content-Credits-SocialMedia'>
                    <ul>
                        <li><img src="./images/facebook2.png" alt="logo de facebook" /></li>
                        <li><img src="./images/gorjeo.png" alt="logo de twitter" /></li>
                        <li><img src="./images/instagram.png" alt="logo de instagram" /></li>
                        <li><img src="./images/discord.png" alt="logo de discord" /></li>
                    </ul>
                </div>
                <p className='Footer-Content-Credits-Copyright'>
                © 2022 South Park Digital Studios LLC. Todos los derechos reservados. South Park © 2022 Comedy Partners. Todos los derechos reservados. Central de la comedia. South Park y todos los títulos, logotipos y personajes relacionados son marcas comerciales de Comedy Partners.
                </p>
            </div>
        </footer>
  )
}

export default Footer