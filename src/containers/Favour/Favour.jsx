import * as React from 'react'
import {useState,useEffect} from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'


export function Favour() {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch(
          'https://www.fastmock.site/mock/a41c7665b83276cbd94cc1e44a35fa6c/movie/favourlist'
        )
          .then((response) => response.json())
          .then((data) => setMovies(data.data.list))
    },[])
  return (
    <ImageList
      sx={{ width: '100%', height: 'auto' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {movies.map((item) => (
        <ImageListItem
          key={item.id}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            src={`${item.banner}?w=248&fit=crop&auto=format`}
            srcSet={`${item.banner}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}