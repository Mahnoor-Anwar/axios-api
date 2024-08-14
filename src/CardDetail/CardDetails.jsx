// import axios from 'axios'
// import React, { useState , useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { useNavigate } from 'react-router-dom';


// const CardDetails = () => {

//     const {id} = useParams()

//     const [getSingleData , setSingleData] = useState([])

//     const getSingleApiData = async () =>{
//         let fetchData = await axios(`https://fakestoreapi.com/products/${id}`);
//         setSingleData([fetchData.data])
//     }

//     useEffect(()=>{
//         getSingleApiData()
//     },[])
//   return (
//     <>
//     <h1 style={{textAlign:'center'}}>Product Detail</h1>
//     <div className="detailBox">
//       {getSingleData.map((e,i)=>{
//           return (
//               <>
//                <div style={{ display: "inline-block" }}>
//               <Card sx={{ maxWidth: 345 }} className="card">
//                 <CardHeader 
//                   avatar={
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label="cards">
//                       p
//                     </Avatar>
//                   }
//                   action={
//                     <IconButton aria-label="settings">
//                       <MoreVertIcon />
//                     </IconButton>
//                   }
//                   title={e.title}
//                 />
//                 <CardMedia
//                   component="img"
//                   height="194"
//                   image={e.image}
//                   alt="Paella dish"
//                 />
//                 <CardContent>
//                   <Typography variant="body2" color="text.secondary">
//                     {e.description}
//                   </Typography>
//                 </CardContent>
//                 <CardActions disableSpacing>
//                   <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                   </IconButton>
//                   <IconButton aria-label="share">
//                     <ShareIcon />
//                   </IconButton>
                 
//                 </CardActions>
//               </Card>
//             </div>
//               </>
//           )
//       })}
//     </div>
//     </>
//   )
// }

// export default CardDetails

import React from 'react';
import axios from 'axios'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';



const CardDetail = () => {
  
    const [getSingleData , setSingleData] = useState([])
    const {id} = useParams()

    const getSingleApiData = async () =>{
        let fetchData = await axios(`https://fakestoreapi.com/products/${id}`);
        setSingleData([fetchData.data])
    }

    useEffect(()=>{
        getSingleApiData()
    },[])
  return (
    <>
    <Navbar/>
    <div className="product-detail-container">
      {getSingleData.map((e,i)=>{
        return (
          <>
          
          <div className="product-image col-md-6">
            <img src={e.image} alt="Product Name" style={{height:'500px' , width:'400px'}}/>
          </div>
          <div className="product-details col-md-6">
            <h1>{e.title}</h1>
            <p className="product-description">
              {e.description}
            </p>
            <p className="product-price">$99.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          </>
        )
      })}
    </div>
    </>
  );
}

export default CardDetail;

