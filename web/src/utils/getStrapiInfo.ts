import { query } from "./StrapiQuery";

export function getContactInfo() {
  return query("contacto")
    .then(res => { return res }
  )
}

export function getAboutInfo(){
  return query("acerca-de-empresa")
    .then(res => {return res})
}

export function getUltimateHouses(){
  return query("propiedads?fields[0]=Titulo&fields[1]=Direccion&fields[2]=Precio&fields[3]=Habitaciones&fields[4]=Servicios&fields[5]=Niveles&fields[6]=Metraje&populate[Imagenes][fields]=url")
    .then(res => { 
      return res.data
      }
    )
}

export function singleHouse(precio : number) {
  return query(`propiedads?filters[Precio][$eq]=${precio}`)
  .then(res => { return res.data })
}

export async function getTotalPropiedades() {
  return query("propiedads?fields=Precio")
}

export function getLastPost() {
  return query("propiedads?fields=Titulo,Precio,Habitaciones,Metraje,Servicios&populate[Imagenes][fields]=url&sort=createdAt:desc&pagination[limit]=1")
    .then( res => { return res.data})
  
}