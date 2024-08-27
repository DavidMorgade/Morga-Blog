// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'David Morgade - Blog';

export const SITE_DESCRIPTION = 'Blog personal de Morga';

const PRODUCTION_URL = 'https://codigomorga.es/strapi';


const LONG_API_URL_PRODUCTION = `${PRODUCTION_URL}/api/posts?populate[featured_image][fields][0]=name&populate[featured_image][fields][1]=width&populate[featured_image][fields][2]=height&populate[featured_image][fields][3]=url&populate[author][populate][image][fields][0]=name&populate[author][populate][image][fields][1]=width&populate[author][populate][image][fields][2]=height&populate[author][populate][image][fields][3]=url&populate[categories][populate]=true`


export const URL_LONG = LONG_API_URL_PRODUCTION;
export const URL = PRODUCTION_URL;

export const URL_PORTFOLIO = 'https://www.codigomorga.es/portfolio';
