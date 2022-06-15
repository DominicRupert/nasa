import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { logger } from "../utils/Logger.js";

const params= {
    api_key: 'wzG5AWqcEv9kDtp1OK0oJ3OSuCLZie5Ok7qrfYpd'
  }

class ImageService {
  async getImage() {
    AppState.uri = "";
    const res = await api.get(`?api_key=${params.api_key}`);
    AppState.image = res.data;
    logger.log(res.data, "image");
  }

  async changeImage(date) {
    let uri = AppState.image.uri;
    const res = await api.get(`?api_key=${params.api_key}&date=${date}`);
    logger.log(res.data, "changeimage");
  }
}

export const imageService = new ImageService();
