import React from 'react'
import IEpisode from '../Interfaces/IEpisode'
 
const Episodes = (props:any) =>{
    const Episodios: Array<IEpisode> = [{
        imagen: props.rootspkimage("campamento.jpg"),
        temporada: "T6",
        capitulo: "E14",
        titulo: "El campamento de tolerancia",
        descripcion: "El Señor Garrison es contratado como maestro de cuarto grado y, al enterarse de que si lo despiden por ser gay podría demandar a la escuela por mucho dinero, trata de que eso suceda con la ayuda del Señor Esclavo.",
        fecha: "20/11/2002"
      },{
        imagen: props.rootspkimage("butters_condon.jpg"),
        temporada : "T5",
        capitulo: "E7",
        titulo: "el uso apropiado del condón",
        descripcion: "Unos chicos mayores le enseñan a Cartman a masturbar a un perro diciéndole que es ordeñarlo; cuando los padres de los chicos ven esto le piden a la escuela que les enseñe educación sexual.",
        fecha: "01/08/2001"
      },{
        imagen: props.rootspkimage("jacuzzi.webp"),
        temporada: "T3",
        capitulo: "E8",
        titulo: "Dos hombres desnudos en un Jacuzzi",
        descripcion: "Stan tiene que ir con sus padres a una aburrida fiesta por la lluvia de meteoritos donde los únicos chicos que hay son Butters, Pip, y Dougie. Mientras tanto, Randy y Gerald pasan por una situación incómoda en un jacuzzi.",
        fecha: "21/07/1999"
    
      },{
        imagen: props.rootspkimage("vaca.jpg"),
        temporada: "T2",
        capitulo: "E13",
        titulo: "Días de vacas",
        descripcion: 'Todo South Park festeja el "Día de las Vacas", que incluye una feria, un monumento y la corrida de las vacas. Mientras tanto, los chicos hacen lo que sea para ganar unos muñecos de Terrance y Philip.',
        fecha: "30/09/1998"
    
      },{
        imagen: props.rootspkimage("chef-chocolate.jpg"),
        temporada: "T2",
        capitulo: "E9",
        titulo: "Las bolas de chocolate saladas del Chef",
        descripcion: "El festival de cine independiente, Sundance, se translada a South Park atrayendo a mucha gente al pequeño pueblo y al parecer, todo esto afecta el medio ambiente, y el Señor Mojón cada vez se encuentra peor.",
        fecha: "19/08/1998"
    
    }]
  return (
    <div className='Episodes'>
    <h4>Episodios Completos</h4>
    <div className='Episodes-Content'>
    {Episodios.map((element,index:number) => 
      <div className='Episodes-item' key={index}>
        <div className='Episodes-item-top'>
          <img className='Episodes-item-top-image' src={element.imagen} alt={`imagen ${index}`} />
          <span className='Episodes-item-top-time'>
            <img src="./images/play.png" width="20" alt="boton enviar" />
            <span>21:59</span>
          </span>
        </div>  
        <div className='Episodes-item-bottom'>
          <p className='Episodes-item-bottom-serie'>south park</p>
          <p className='Episodes-item-bottom-season'>{element.temporada} <span className='Episodes-item-bottom-season-dot'></span>{element.capitulo} </p>
          <p className='Episodes-item-bottom-title'>{element.titulo}</p>
          <p className='Episodes-item-bottom-description'>{element.descripcion}</p>
          <p className='Episodes-item-bottom-fecha'>{element.fecha}</p>
        </div>  
      </div>
    )}
    </div>
  </div>
  )
}

export default Episodes