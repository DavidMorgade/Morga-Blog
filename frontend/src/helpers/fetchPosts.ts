import { type PostRequest } from "../types/postRequest";
import { URL_LONG } from "../consts";






export async function fetchPosts() {

  const res = await fetch(URL_LONG);
  const data: PostRequest = await res.json();


  const postArray = data.data;

  if (res.status !== 200) {
    console.error(data);
    throw new Error('Failed to fetch API');
  }
  return postArray;
}
