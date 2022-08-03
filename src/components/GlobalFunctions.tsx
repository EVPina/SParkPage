

const Ocultar = (itemid:string,rmvclass:string,addclass:string) =>{
    document.getElementById(itemid)!.classList.remove(rmvclass)
    document.getElementById(itemid)!.classList.add(addclass)
}


export { Ocultar }