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
        // console.log(movies)
        dispatch({ type: 'setPopularMovies', payload: movies.results})
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
        // console.log(TVs)
        dispatch({ type: 'setPopularTVs', payload: TVs.results})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}
export const getFreeMovies = () => {
  return dispatch =>{
    axios({
      url: `${process.env.REACT_APP_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(movies=>{
        // console.log(movies)
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
      url: `${process.env.REACT_APP_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
      .then(({data})=>{
        return data
      })
      .then(TVs=>{
        // console.log(TVs)
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
        console.log(data)
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
        console.log(promises)
        return Promise.all(promises)
        // return data
      })
      .then(movies=>{
        console.log(movies)
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
        console.log(data)
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
        console.log(promises)
        return Promise.all(promises)
      })
      .then(TVs=>{
        console.log(TVs)
        let filter = TVs.filter(movie=>movie.videos.results.length !== 0)
        // console.log(TVs)
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
        // console.log(trending)
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
        // console.log(trending)
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
        console.log(film)
        dispatch({ type: 'setFilm', payload: film})
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
        console.log(film)
        dispatch({ type: 'setFilm', payload: film})
      })
      .catch(error=>{
        console.log(error.response)
      })    
  }
}