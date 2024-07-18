// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'David Morgade - Blog';

export const SITE_DESCRIPTION = 'Blog personal de Morga';

export const UPLOADS_URL = 'http://localhost:1337';

export const PRODUCTION_URL = 'http://37.187.218.72';

export const LONG_API_URL = `${UPLOADS_URL}/api/posts?populate[featured_image][fields][0]=name&populate[featured_image][fields][1]=width&populate[featured_image][fields][2]=height&populate[featured_image][fields][3]=url&populate[author][populate][bioImage][fields][0]=name&populate[author][populate][bioImage][fields][1]=width&populate[author][populate][bioImage][fields][2]=height&populate[author][populate][bioImage][fields][3]=url&populate[categories][populate]=true`

export const LONG_API_URL_PRODUCTION = `${PRODUCTION_URL}/api/posts?populate[featured_image][fields][0]=name&populate[featured_image][fields][1]=width&populate[featured_image][fields][2]=height&populate[featured_image][fields][3]=url&populate[author][populate][image][fields][0]=name&populate[author][populate][image][fields][1]=width&populate[author][populate][image][fields][2]=height&populate[author][populate][image][fields][3]=url&populate[categories][populate]=true`
