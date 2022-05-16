import {key} from './key';
export async function handleRequest(request: Request): Promise<Response> {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
  const response = await fetch(url);
  return response;
  //return new Response(`request method: ${request.method}`)
}
