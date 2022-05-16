import {key} from './key';
export async function handleRequest(request: Request): Promise<Response> {
  const reduced = request.url.replace("https://", "");
  const idxOfSlash = reduced.indexOf("/");
  const rest = reduced.substring(idxOfSlash + 1);
  const url = `https://api.nasa.gov/${rest}?api_key=${key}`;
  const response = await fetch(url);
  return response;
}
