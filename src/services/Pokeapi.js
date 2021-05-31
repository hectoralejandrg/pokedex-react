import axios from "axios";
const baseUrl = "https://pokeapi.co/api/v2/type";

export const getTypes = (url) => axios.get(url);

export const getPokemon = (url) => axios.get(url);

export const getAllTypes = ()=> axios.get(`${baseUrl}`)
