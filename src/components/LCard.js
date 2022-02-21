import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Lcard.css'


function LCard(props) {
let {name,date,view,like,share,img} = props;
  return (
    <div className='main'>
      <Card sx={{ width: 890,marginTop:2  }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            </Avatar>
          }
          title={<h1>{name}</h1>}
          subheader={<p>{date}</p>}
          
        />
        <CardMedia
          component="img"
          
          image={img}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />{like}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />{share} 
          </IconButton>
          <IconButton aria-label="view">
            <VisibilityIcon/>{view}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
export default LCard;