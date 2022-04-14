import React from 'react'
import Grid from '@mui/material/Grid';
import ImgMediaCard from '../../components/MediaCard';
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom"


export function Index() {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(
      'https://www.fastmock.site/mock/a41c7665b83276cbd94cc1e44a35fa6c/movie/hotlist'
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.data.list))
      console.log(movies)

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])

  return (
    <div>
      {Array.from(movies).map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Link to="/detail" ement>
            <ImgMediaCard
              image={item.banner}
              name={item.name}
              desc={item.desc}
            />
          </Link>
        </Grid>
      ))}
    </div>
  )
}
