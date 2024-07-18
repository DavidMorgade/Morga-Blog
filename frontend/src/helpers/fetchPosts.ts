import { type PostRequest } from "../types/postRequest";
import { LONG_API_URL_PRODUCTION } from "../consts";


export async function fetchPosts() {

    const res = await fetch(LONG_API_URL_PRODUCTION);
    const data: PostRequest = await res.json();


    const postArray = data.data;

    if (res.status !== 200) {
        console.error(data);
        throw new Error('Failed to fetch API');
    }
    return postArray;
}
