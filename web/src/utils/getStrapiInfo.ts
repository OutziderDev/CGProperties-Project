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