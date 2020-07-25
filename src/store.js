import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const english = {
  movies: "Movies",
  TV: "TV Shows",
  people: "People",
  topRated: "Top Rated",
  popular: "Popular",
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
  trending: [],
  trailers: [],
  popularMovies: [],
  popularTVs: [],
  freeMovies: [],
  freeTVs: [],
  trailerMovies: [],
  trailerTVs: [],
  trendingWeek: [],
  trendingDay: [],
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
    case 'setPopularMovies':
      return {...state, popularMovies:action.payload}
    case 'setPopularTVs':
      return {...state, popularTVs:action.payload}
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
    default:
      return state
  }
}

const store = createStore(changeState,applyMiddleware(thunk))
export default store