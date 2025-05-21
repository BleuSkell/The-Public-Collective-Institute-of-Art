import axios from "axios";

const API_URL = "https://api.artic.edu/api/v1/artworks";
const IMG_API_URL = "https://www.artic.edu/iiif/2";

export async function fetchArtworks(page = 1, limit = 10) {
  const response = await axios.get(API_URL, {
    params: { page, limit }
  });
  return response.data; // contains .data and .pagination
}

export function getArtworkImageUrl(imageId: string) {
  return `${IMG_API_URL}/${imageId}/full/843,/0/default.jpg`;
}