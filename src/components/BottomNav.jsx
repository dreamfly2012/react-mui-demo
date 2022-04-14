import * as React from 'react'
import Paper from '@mui/material/Paper'
import PhotoFilter from '@mui/icons-material/PhotoFilter'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import { Link } from 'react-router-dom'


import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'


import { Index, About } from '../containers'




export default function BottomNav() {
 

    const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue)
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          label="热门"
          icon={<PhotoFilter />}
          to="/"
          component={Link}
        />
        <BottomNavigationAction
          label="喜欢"
          icon={<FavoriteIcon />}
          to="/favour"
          component={Link}
        />
        <BottomNavigationAction
          label="我的"
          icon={<PersonPinIcon />}
          component={Link}
          to="/about"
        />
      </BottomNavigation>
    </Paper>
  )
  
}
