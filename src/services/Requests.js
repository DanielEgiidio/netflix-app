import apikey from "./apikey";


const requests = {
    fetchTreding: `/trending/all/week?api_key=${apikey}&language=pt-BR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apikey}&with_network=213&language=pt-BR`,
    fetchTopRated: `/movie/top_rated?api_key=${apikey}&language=pt-BR`,
    fetchActionMovies: `/discover/movie?api_key=${apikey}&with_genres=28&language=pt-BR`,
    fetchComedyMovies: `/discover/movie?api_key=${apikey}&with_genres=35&language=pt-BR`,
    fetchHorrorMovies: `/discover/movie?api_key=${apikey}&with_genres=27&language=pt-BR`,
    fetchRomanceMovies: `/discover/movie?api_key=${apikey}&with_genres=10749&language=pt-BR`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${apikey}&with_genres=99&language=pt-BR`,
}

export default requests;