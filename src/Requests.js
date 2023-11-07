const key = '1ff1f41399b8457b7f51d481eb02b9f1'

const requests = {

    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=pt-BR&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=pt-BR&page=1`,
    requestHorror: `https://api.themoviedb.org/3/movie/horror?api_key=${key}&language=pt-BR&page=1`,
};

export default requests