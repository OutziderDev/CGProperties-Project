const  STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
const STRAPI_TOKEN  = import.meta.env.PUBLIC_STRAPI_TOKEN;
console.log('url', STRAPI_URL)
export function query(url) {
  return fetch(`${STRAPI_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`
    }
  }).then(res => res.json())
} 

