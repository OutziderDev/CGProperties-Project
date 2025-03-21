import { query } from "./StrapiQuery";

export function getContactInfo() {
  return query("contacto")
    .then(res => { return res }
  )
}

export function getAgents() {
  return query("agentes?fields=NombreAgente,EmailAgente,TelefonoAgente&populate[FotoAgente][fields]=url")
  .then(res => { return res.data}  )
}

export function getNotices() {
  return query("noticias?fields=TituloNoticia,DescripcionNoticia,createdAt&populate[FotoNoticia][fields]=url")
  .then(res => { return res.data})
}

export function getAllHouses() {
  return query("propiedads?fields=Titulo,Direccion,Precio,Habitaciones,Servicios,Niveles,Metraje&populate[Imagenes][fields]=url&populate[categoria_propiedad][fields]=slug")
  .then(res => {return res.data})
}

export function getAboutInfo(){
  return query("acerca-de-empresa?populate=*")
    .then(res => {return res})
}

export function getUltimateHouses(){
  return query("propiedads?fields=Titulo,Direccion,Precio,Habitaciones,Servicios,Niveles,Metraje&sort=createdAt:desc&pagination[limit]=4&populate[Imagenes][fields]=url")
    .then(res => { return res.data })
}

export function singleHouse(nombre : string) {
  return query(`propiedads?filters[Titulo][$eq]=${nombre}&fields=Titulo,Direccion,Precio,Habitaciones,Metraje,Niveles,Servicios,Descripcion,FechaConstruccion&populate[Imagenes][fields]=name,url,width,height`)
  .then(res => { return res.data[0] }) 
}

export async function getTotalPropiedades() {
  return query("propiedads?fields=Titulo")
}

export function getLastPost() {
  return query("propiedads?fields=Titulo,Precio,Habitaciones,Metraje,Servicios&populate[Imagenes][fields]=url&sort=createdAt:desc&pagination[limit]=1")
    .then( res => { return res.data})
  
}