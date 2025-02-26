import { query } from "./StrapiQuery";

export function getContactInfo() {
  return query("contacto")
    .then(res => {
      console.log(res)
      return res
    }
  )
}