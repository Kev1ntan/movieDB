import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const english = {
  movies: "Movies",
  TV: "TV Shows",
  people: "People",
  topRated: "Top Rated",
  popular: "Popular",
  search: "Search",
  upComing: "Upcoming",
  support: "Support",
  nowPlaying: "Now Playing",
  airingToday: "Airing Today",
  more: "More",
  onTV: "On TV",
  discussions: "Discussions",
  popularPeople: "Popular People",
  leaderboard: "Leaderboard",
  login: "Login",
}
const indonesia = {
  movies: "Film",
  TV: "Acara TV",
  onTV: "di TV",
  search: "Cari",
  leaderboard: "Papan Peringkat",
  topRated: "Peringkat Teratas",
  airingToday: "Tayang hari ini",
  upComing: "Akan Datang",
  popularPeople: "Orang Terkenal",
  support: "Dukungan",
  discussions: "Diskusi",
  popular: "Populer",
  nowPlaying: "Sedang Tayang",
  people: "Orang",
  more: "Lainnya",
  login: "Masuk",
}
const initialState = {
  language: english,
  freeFilm: [],
  popularFilm: [],
  selectedFreeFilm: "movie",
  selectedPopularFilm: "movie",
  selectedTrendingFilm: "day",
  film: "",
  person: "",
  playingMovies: [],
  upcomingMovies: [],
  menuFilms: [],
  trending: [],
  trailers: [],
  popularMovies: [],
  copyFilms: [],
  popularTVs: [],
  freeMovies: [],
  freeTVs: [],
  trailerMovies: [],
  trailerTVs: [],
  trendingWeek: [],
  trendingDay: [],
  movieGenres: [],
  tvGenres: [],
  selectedGenres: [],
  topRatedMovies: [],
  popularPeople: [],
  topRatedTVs: [],
  airingTVs: [],
  onTVs: [],
  searchFilm: [],
}

const changeState = (state = initialState, action) => {
  switch (action.type) {
    case 'changeLg':
      if(action.lg === "indonesia"){
        return {...state,language: indonesia}
      }else{
        return {...state,language: english}
      }
    case 'changePopularSelected':
      if(action.payload === "movie"){
        return {...state,popularFilm: state.popularMovies,selectedPopularFilm: "movie"}
      }else{
        return {...state,popularFilm: state.popularTVs,selectedPopularFilm: "tv"}
      }
    case 'changeFreeSelected':
      if(action.payload === "movie"){
        return {...state,freeFilm: state.freeMovies,selectedFreeFilm: "movie"}
      }else{
        return {...state,freeFilm: state.freeTVs,selectedFreeFilm: "tv"}
      }
    case 'resetFilter':
      return {...state, menuFilms: state.copyFilms, selectedGenres: []}
    case 'changeTrailerSelected':
      if(action.payload === "movie"){
        return {...state,trailers: state.trailerMovies,selectedTrailerFilm: "movie"}
      }else{
        return {...state,trailers: state.trailerTVs,selectedTrailerFilm: "tv"}
      }
    case 'changeTrendingSelected':
      if(action.payload === "day"){
        return {...state,trending: state.trendingDay,selectedTrendingFilm: "day"}
      }else{
        return {...state,trending: state.trendingWeek,selectedTrendingFilm: "week"}
      }
    case 'changeSelectedGenres':
      if(state.selectedGenres.filter(genres=> genres === action.payload).length !== 0){
        let newGenres = state.selectedGenres.filter(genres=> genres !== action.payload)
        return {...state,selectedGenres: newGenres}
      }else{
        return {...state,selectedGenres: [...state.selectedGenres,action.payload]}
      }
    case 'filter':
      let newFilms = []
      for(let i = 0; i < state.copyFilms.length; i++){
        for(let j = 0; j < state.selectedGenres.length; j++){
          if(state.copyFilms[i].genre_ids.filter(gen => gen === state.selectedGenres[j]).length !== 0){
            newFilms.push(state.copyFilms[i])
            break;
          }
        }
      }
      return{...state, menuFilms: newFilms}
    case 'setPopularMovies':
      return {...state, popularMovies:action.payload, copyFilms:action.payload, menuFilms:action.payload}
    case 'setPlayingMovies':
      return {...state, playingMovies:action.payload, copyFilms:action.payload, menuFilms:action.payload}
    case 'setPopularPerson':
      return {...state, popularPeople:action.payload}
    case 'setUpcomingMovies':
      return {...state, upcomingMovies:action.payload, copyFilms:action.payload, menuFilms:action.payload}
    case 'setTopRatedMovies':
      return {...state, topRatedMovies:action.payload, copyFilms:action.payload, menuFilms:action.payload}
    case 'setTopRatedTVs':
      return {...state, topRatedTVs:action.payload, copyFilms:action.payload, menuFilms:action.payload}
    case 'setAiringTVs':
      return {...state, airingTVs:action.payload, copyFilms:action.payload, menuFilms:action.payload}
    case 'setOnTVs':
      return {...state, onTVs:action.payload, copyFilms:action.payload, menuFilms:action.payload}
    case 'setMovieGenres':
      return {...state, movieGenres:action.payload}
    case 'setTvGenres':
      return {...state, tvGenres:action.payload}
    case 'setPopularTVs':
      return {...state, popularTVs:action.payload, copyFilms:action.payload, menuFilms:action.payload}
    case 'setFreeMovies':
      return {...state, freeMovies:action.payload}
    case 'setFreeTVs':
      return {...state, freeTVs:action.payload}
    case 'setTrailerMovies':
      return {...state, trailerMovies:action.payload}
    case 'setTrailerTVs':
      return {...state, trailerTVs:action.payload}
    case 'setTrendingDay':
      return {...state, trendingDay:action.payload}
    case 'setTrendingWeek':
      return {...state, trendingWeek:action.payload}
    case 'setFilm':
      return {...state, film:action.payload}
    case 'setPerson':
      return {...state, person:action.payload}
    case 'setSearch':
      return {...state, searchFilm:action.payload}
    default:
      return state
  }
}

const store = createStore(changeState,applyMiddleware(thunk))
export default store