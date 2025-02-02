import axios from "axios";
const API_KEY = process.env.REACT_APP_CLIENT_FACEIT_API_KEY;

export default class PostService {
  static baseUrl = "https://open.faceit.com/data/v4";
  static async getUserStatsByNickname(nickname) {
    const response = await axios.get(
      `${PostService.baseUrl}/players?nickname=${nickname}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response;
  }
}
