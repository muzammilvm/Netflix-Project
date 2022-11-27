import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { imageUrl, API_KEY } from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response);
            setMovies(response.data.results)
        }).catch(err => {
            alert('network error')
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    const handleMovies = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
                console.log(response.data.results[0]);
            }else{
                console.log('Trailer not available');
            }
        })
    }
    return (

        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies.map((obj) =>
                        <img onClick={() => handleMovies(obj.id)}className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                    )
                }
            </div>

         { urlId &&  <YouTube opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default RowPost
