import axios from "axios";

const API_URL = import.meta.env.VITE_ART_DESC_API_URL;
const IMG_API_URL = import.meta.env.VITE_ART_IMG_API_URL;

export async function fetchArtworks(page = 1, limit = 10) {
  const response = await axios.get(API_URL, {
    params: { page, limit }
  });
  return response.data; // contains .data and .pagination
}

export function getArtworkImageUrl(imageId: string) {
  return `${IMG_API_URL}/${imageId}/full/843,/0/default.jpg`;
}