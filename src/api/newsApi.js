import axios from "axios";

const API_KEY = "b6e66818740f4ba98caf4d23ee310e54";
const BASE_URL = "https://newsapi.org/v2";

export const getNews = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
