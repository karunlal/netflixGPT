import { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({ movieid }) => {
  //   const [trailerId, setTrailerId] = useState(null)
  const getMovieVideos = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/843527/videos?language=en-US',
      API_OPTIONS
    )
    const json = await data.json()
    console.log(json)
    const filterData = json.results.filter((video) => video.type === 'Trailer')
    const trailer = filterData.length ? filterData : json.results[0]
    console.log(trailer.key)
    // console.log(trailerId)
  }
  useEffect(() => {
    getMovieVideos()
  }, [])

  //fetch trailer video
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={'https://www.youtube.com/embed/' + trailer.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground
