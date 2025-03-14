const  STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
const STRAPI_TOKEN  = import.meta.env.PUBLIC_STRAPI_TOKEN;

export function query(url: String) {
  return fetch(`${STRAPI_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0'
    }
  }).then(res => res.json())
} 