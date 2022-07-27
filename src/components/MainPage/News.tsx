import React from 'react'
import INoticias from '../Interfaces/INoticias'

const News = () =>{
    const Noticias: Array<INoticias> = [{
      imagen: "data:image/jpeg;base64,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",
      titulo: "Colección: Getting Frisky",
      fecha: "20/07/2022"
    },{
      imagen:"https://kowi.one/storage/2022/07/1656769145_476_La-temporada-25-demuestra-que-Randy-Marsh-no-deberia-ser.jpg",
      titulo: 'PARAMOUNT + ESTRENA “SOUTH PARK THE STREAMING WARS PART 2", El 14 de julio',
      fecha: "08/07/2022"
    },{
      imagen: "https://playplex.mtvnimages.com/uri/mgid:arc:content:southpark.intl:22946cb6-ed01-11e0-aca6-0026b9414f30?stage=live&ep=shared.southpark.latam.en-us",
      titulo: "Colección: Happy Birthday Cartman",
      fecha: "06/07/2022"
  
    },{
      imagen: "https://www.proyectorfantasma.com.ar/wp-content/uploads/2014/09/south_park_04-1280x720.jpg",
      titulo: "Colección: Happy Birthday Cartman",
      fecha: "29/06/2022"
  
    },{
      imagen: "https://m.media-amazon.com/images/M/MV5BNTMyNGQ1ZDEtZTAwYi00MTI5LWI4YTUtNGRkMzlkZmM1OTkxXkEyXkFqcGdeQXVyNjgyODE4NTE@._V1_.jpg",
      titulo: "Colección: Summertime",
      fecha: "22/06/2022"
  
  },{
    imagen: "https://i.blogs.es/2ae71a/southpark_thegame00/450_1000.webp",
    titulo: "Colección: Game On",
    fecha: "15/06/2022"
  },{
    imagen: "https://www.comunidadphonedestroyer.com/wp-content/uploads/2019/07/wall-780x405.jpg",
    titulo: "Colección: Alter Egos And Superheroes",
    fecha: "08/06/2022"
  },{
    imagen: "https://ocweekly.com/wp-content/uploads/2018/11/6630943_southparkfood.jpg",
    titulo: "Colección: All You Can Eat",
    fecha: "01/06/2022"
  },{
    imagen: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/south-park-quien-es-la-madre-de-cartman-en-realidad/66036738-1-esl-ES/South-Park-Quien-es-la-madre-de-Cartman-en-realidad.jpg",
    titulo: "Colección: South Park Matriarchs",
    fecha: "25/05/2022"
  },{
    imagen: "https://i.pinimg.com/originals/92/de/37/92de3773168b2b757cdb1661b5f86697.jpg",
    titulo: "Colección: Hugs & Kisses",
    fecha: "18/05/2022"
  },{
    imagen: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/y/yoda-cartman-south-park.jpg",
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