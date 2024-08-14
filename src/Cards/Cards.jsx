import React, {useState , useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';

export default function Cards() {
 
const navigate = useNavigate()

const {id} = useParams()

const [getData , setData] = useState([])

const getApiData = async () =>{
    let fetchData = await axios("https://fakestoreapi.com/products/");
    setData(fetchData.data)
}

useEffect(()=>{
    getApiData()
},[])

  return (
    <>
    <Navbar />
    <div >
      <h1 style={{textAlign:'center'}}>Product List</h1>
    {getData.map((e,i)=>{
      return (
        <div className="cardsbox">
        <Card sx={{ maxWidth: 345 }} className="card">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="cards">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={e.title}
        />
        <CardMedia
          component="img"
          height="194"
          image={e.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {e.description.slice(1,100)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <div className="btn">
          <button className="btn-primary addbtn" onClick={()=>{navigate(`/products/${e.id}`)}}>View</button>
          </div>
        </CardActions>
     
      </Card> 
        </div>
      )
    })}
   </div>
   </>
  );
}
