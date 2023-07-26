import axios from "axios";

const API_KEY = "56c4e472efba496eb98fd9df15aeac95";
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
