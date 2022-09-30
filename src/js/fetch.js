import axios from 'axios';
const axios = require('axios');

export default class NewApiService {
  constructor() {
    this.search = '';
    this.page = 1;
    this.per_page = 40;
  }

  async onImgGet() {
    const URL = 'https://pixabay.com/api/';
    const KEY = '30260543-3a74df35b38ad65d1c84a1acf';

    const response = await axios.get(`${URL}`, {
      params: {
        key: KEY,
        q: this.search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: this.per_page,
        page: this.page,
      },
    });

    return response.data;
  }
  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get onGet() {
    return this.search;
  }
  set onGet(neQuery) {
    this.search = neQuery;
  }
}
