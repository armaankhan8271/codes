import React from "react";
import "./Home.css";
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="Home d-flex">
        home
        <div className="innerhome">
          <h1 className="display-1 fw-bolder heading">Photo Gallary</h1>
          <h1 className="display-4 fw-bolder heading1">By Armaan Khan </h1>
          <h1 className="display-4 fw-bolder heading2">And Altamash</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            laudantium quia neque tenetur, ipsa dolores, perspiciatis, magni
            vero dolor modi doloribus voluptate aperiam odio tempore ratione
            inus voluptate at, asperiores repellat
            
          </p>
        <div className=""><button
                className="display-1 border-rounded text-center home-btn text-end   fw-bolder"
              >
                <Link className="text-light"   to="/Nav">Start <SendIcon style={{ color: "black", fontSize: "75px" }}/></Link>
                {/* Start <SendIcon style={{ color: "black", fontSize: "75px" }}/> */}
              </button></div>
        </div>
        <div className="img1">
          
          <img src="./bg21.jpg" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
