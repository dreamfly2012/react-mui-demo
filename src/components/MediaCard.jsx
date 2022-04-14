import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const defaultProps = {
   image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
   name: '美丽的风景',
   desc: 'react 中子组件通过props来直接获取参数',
 }

export default function ImgMediaCard({image=defaultProps.image,name=defaultProps.name,desc=defaultProps.desc}) {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  )
}
