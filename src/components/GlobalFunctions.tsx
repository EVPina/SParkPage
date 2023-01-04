

const Ocultar = (itemid:string,rmvclass:string,addclass:string) =>{
    document.getElementById(itemid)!.classList.remove(rmvclass)
    document.getElementById(itemid)!.classList.add(addclass)
}

const rootspkimage = (image:string) => "/images/spark/"+image;

export { Ocultar,rootspkimage }