import { type PostRequest } from "../types/postRequest";


export async function fetchPosts() {

    const res = await fetch('http://localhost:1337/api/posts?populate[featured_image][fields][0]=name&populate[featured_image][fields][1]=width&populate[featured_image][fields][2]=height&populate[featured_image][fields][3]=url&populate[author][populate][image][fields][0]=name&populate[author][populate][image][fields][1]=width&populate[author][populate][image][fields][2]=height&populate[author][populate][image][fields][3]=url&populate[categories][populate]=true');
    const data: PostRequest = await res.json();


    const postArray = data.data;

    if (res.status !== 200) {
        console.error(data);
        throw new Error('Failed to fetch API');
    }
    return postArray;
}
