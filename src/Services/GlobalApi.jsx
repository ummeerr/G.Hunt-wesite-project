
import axios from "axios";


const key="dc20ef51165942a5aa26817dddee5d39"
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api',
    })



const getGenreList= axiosCreate.get('/genres?key='+key);
const getAllGames= axiosCreate.get('/games?key='+key);
const getGameListByGenresId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);


export default{
    getGenreList,
    getAllGames,
    getGameListByGenresId,
}