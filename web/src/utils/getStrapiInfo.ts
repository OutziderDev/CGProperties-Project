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