import axios from 'axios'
export const getPopularMovies = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(movies=>{
        dispatch({ type: 'setPopularMovies', payload: movies.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getMovieGenres = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(({genres})=>{
        dispatch({ type: 'setMovieGenres', payload: genres})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getTVGenres = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(({genres})=>{
        dispatch({ type: 'setTvGenres', payload: genres})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getPopularTv = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(TVs=>{
        dispatch({ type: 'setPopularTVs', payload: TVs.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getPlayingMovies = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(movies=>{
        dispatch({ type: 'setPlayingMovies', payload: movies.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getAiringTv = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(TVs=>{
        dispatch({ type: 'setAiringTVs', payload: TVs.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getUpcomingMovies = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(movies=>{
        dispatch({ type: 'setUpcomingMovies', payload: movies.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getOnTv = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(TVs=>{
        dispatch({ type: 'setOnTVs', payload: TVs.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getTopRatedMovies = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(movies=>{
        dispatch({ type: 'setTopRatedMovies', payload: movies.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getTopRatedTv = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(TVs=>{
        dispatch({ type: 'setTopRatedTVs', payload: TVs.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getPopularPeople = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}person/popular?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(people=>{
        dispatch({ type: 'setPopularPerson', payload: people.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getFreeMovies = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=revenue.desc`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(movies=>{
        dispatch({ type: 'setFreeMovies', payload: movies.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getFreeTv = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&sort_by=revenue.desc`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(TVs=>{
        dispatch({ type: 'setFreeTVs', payload: TVs.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getTrailerMovies = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&year=2020`,
      method: 'GET',
    })
      .then(({data})=>{
        let promises = []
        data.results.map(arr=>promises.push(
          axios({
            url: `${process.env.REACT_APP_URL}movie/${arr.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`,
            method: 'GET',
          })
            .then(resp=>{
              return resp.data
            })
        ))
        return Promise.all(promises)
        // return data
      })
      .then(movies=>{
        let filter = movies.filter(movie=>movie.videos.results.length !== 0)
        dispatch({ type: 'setTrailerMovies', payload: filter})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getTrailerTv = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&year=2020`,
      method: 'GET',
    })
      .then(({data})=>{
        let promises = []
        data.results.map(arr=>promises.push(
          axios({
            url: `${process.env.REACT_APP_URL}tv/${arr.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,`,
            method: 'GET',
          })
            .then(resp=>{
              return resp.data
            })
        ))
        return Promise.all(promises)
      })
      .then(TVs=>{
        let filter = TVs.filter(movie=>movie.videos.results.length !== 0)
        dispatch({ type: 'setTrailerTVs', payload: filter})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getTrendingToday = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(trending=>{
        dispatch({ type: 'setTrendingDay', payload: trending.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getTrendingWeek = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(trending=>{
        dispatch({ type: 'setTrendingWeek', payload: trending.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getMovieDetails = (id) => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,recommendations,keywords`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(film=>{
        dispatch({ type: 'setFilm', payload: film})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getPersonDetails = (id) => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}person/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=combined_credits`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(person=>{
        dispatch({ type: 'setPerson', payload: person})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getSearchFilm = (query) => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(search=>{
        dispatch({ type: 'setSearch', payload: search.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getTvDetails = (id) => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,recommendations,keywords`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(film=>{
        dispatch({ type: 'setFilm', payload: film})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}