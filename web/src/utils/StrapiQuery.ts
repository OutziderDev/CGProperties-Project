const  STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
const STRAPI_TOKEN  = import.meta.env.PUBLIC_STRAPI_TOKEN;

export function query(url: String) {
  return fetch(`${STRAPI_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      cache: "no-store"
    }
  }).then(res => res.json())
} 