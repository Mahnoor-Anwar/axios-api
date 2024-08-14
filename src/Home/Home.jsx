import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "../App.css";
import Bg from "../assets/bg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logo from '../assets/logo.png';
import Navbar from "../Navbar";

const Home = () => {
  const navigate = useNavigate();
  const [getData, setData] = useState([]);

  const getApiData = async () => {
    let fetchData = await axios("https://fakestoreapi.com/products/");
    setData(fetchData.data);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div>
      <Navbar />
        <img src={Bg} className="bg-image" />

        <div className="intro">
          <h1>
            Introducing<br></br>New Arrivals
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            accusamus.
          </p>
          <button
            className="view"
            onClick={() => {
              navigate("./Cards");
            }}
          >
            View Collection
          </button>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:'center' ,  marginTop:'200px'}}>Featured Product</h1>
      <div style={{ display: "flex" , justifyContent:'center'}}>
        {getData.slice(0, 4).map((e, i) => {
          console.log("e", e);
          return (
            <div style={{ display: "inline-block" }}>
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardHeader 
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="cards">
                      p
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
                    {e.desc}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <button
                    className="btn-primary addbtn"
                    onClick={() => {
                      navigate(`/products/${e.id}`);
                    }}
                  >
                    view
                  </button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
      </div>
     
    </>
  );
};

export default Home;
