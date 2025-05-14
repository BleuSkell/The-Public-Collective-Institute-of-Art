import axios from "axios";

const API_URL = "https://api.artic.edu/api/v1/artworks";

export async function fetchArtworks(page = 1, limit = 10) {
  const response = await axios.get(API_URL, {
    params: { page, limit }
  });
  return response.data; // bevat .data en .pagination
}