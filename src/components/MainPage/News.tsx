import React from 'react'
import INoticias from '../Interfaces/INoticias'

const News = (props:any) =>{
  const Noticias: Array<INoticias> = [{
    imagen: props.rootspkimage("randy-flojo.jpg"),
    titulo: "Colección: Getting Frisky",
    fecha: "20/07/2022"
  },{
    imagen: props.rootspkimage("streaming.jpg"),
    titulo: 'PARAMOUNT + ESTRENA “SOUTH PARK THE STREAMING WARS PART 2", El 14 de julio',
    fecha: "08/07/2022"
  },{
    imagen: props.rootspkimage("hb-cartman.jpg"),
    titulo: "Colección: Happy Birthday Cartman",
    fecha: "06/07/2022"

  },{
    imagen: props.rootspkimage("winter.jpg"),
    titulo: "Colección: Winter Vacation",
    fecha: "28/12/2022"

  },{
    imagen: props.rootspkimage("summer.jpg"),
    titulo: "Colección: Summertime",
    fecha: "22/06/2022"
  },{
    imagen: props.rootspkimage("game.webp"),
    titulo: "Colección: Game On",
    fecha: "15/06/2022"
  },{
      imagen: props.rootspkimage("heroes.jpg"),
    titulo: "Colección: Alter Egos And Superheroes",
    fecha: "08/06/2022"
  },{
    imagen: props.rootspkimage("alleat.jpg"),
    titulo: "Colección: All You Can Eat",
    fecha: "01/06/2022"
  },{
    imagen: props.rootspkimage("mathiarcs.jpg"),
    titulo: "Colección: South Park Matriarchs",
    fecha: "25/05/2022"
  },{
    imagen: props.rootspkimage("kisses.jpg"),
    titulo: "Colección: Hugs & Kisses",
    fecha: "18/05/2022"
  },{
    imagen: props.rootspkimage("best-cartman.jpg"),
    titulo: "Colección: Best of Cartman",
    fecha: "11/05/2022"
  }]
  return (
    <div className='Noticias'>
        <h4>Últimas Noticias</h4>
        <div className='Noticias-Content'>
        {Noticias.map((element,index:number) => 
        <div className='Noticias-item' key={index}>
            <div className='Noticias-item-top'>
            <img className='Noticias-item-top-image' src={element.imagen} alt={`imagen ${index}`} />          
            </div>  
            <div className='Noticias-item-bottom'>
            <p className='Noticias-item-bottom-title'>{element.titulo}</p>
            <p className='Noticias-item-bottom-fecha'>{element.fecha}</p>
            </div>  
        </div>
        )}
        </div>
    </div>
  )
}

export default News