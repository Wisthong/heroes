import axios from 'axios';

const baseURL = 'https://api-heroes-c.herokuapp.com'; 
export const heroesApi = axios.create({baseURL});

// export default heroesApi;