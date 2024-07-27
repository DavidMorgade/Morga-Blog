// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const isProd = process.env.NODE_ENV === 'production';

export const SITE_TITLE = 'David Morgade - Blog';

export const SITE_DESCRIPTION = 'Blog personal de Morga';

const UPLOADS_URL = 'http://localhost:1337';

const PRODUCTION_URL = 'https://codigomorga.es';

const LONG_API_URL = `${UPLOADS_URL}/api/posts?populate[featured_image][fields][0]=name&populate[featured_image][fields][1]=width&populate[featured_image][fields][2]=height&populate[featured_image][fields][3]=url&populate[author][populate][image][fields][0]=name&populate[author][populate][image][fields][1]=width&populate[author][populate][image][fields][2]=height&populate[author][populate][image][fields][3]=url&populate[categories][populate]=true`


const LONG_API_URL_PRODUCTION = `${PRODUCTION_URL}/api/posts?populate[featured_image][fields][0]=name&populate[featured_image][fields][1]=width&populate[featured_image][fields][2]=height&populate[featured_image][fields][3]=url&populate[author][populate][image][fields][0]=name&populate[author][populate][image][fields][1]=width&populate[author][populate][image][fields][2]=height&populate[author][populate][image][fields][3]=url&populate[categories][populate]=true`


export const URL_LONG = isProd ? LONG_API_URL_PRODUCTION : LONG_API_URL;
export const URL = isProd ? PRODUCTION_URL : UPLOADS_URL;

export const URL_PORTFOLIO = 'https://www.codigomorga.es/portfolio';
