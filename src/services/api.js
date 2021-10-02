// token: api_key=ae5f0d44289ef3079a1f38c61b0ea57d
// https://api.themoviedb.org/3
// /movie/now_playing
// ?api_key=ae5f0d44289ef3079a1f38c61b0ea57d
// &language=pt-BR
// &page=1

import axios from "axios";

export const KEY = 'ae5f0d44289ef3079a1f38c61b0ea57d';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api;
