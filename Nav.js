import React from "react";
import "./Nav.css";
import axios from "axios";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MediaQuery from 'react-responsive'
// import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import UrlImageDownloader from 'react-url-image-downloader'
import DownloadIcon from '@mui/icons-material/Download';




const Nav = () => {

  
  const [image, setimage] = useState([]);
  const [search, setsearch] = useState([]);
  const api = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=WbHbsT0exIa_rIiZlu2i92iQufzyRmy7eXKMFooTYms`;

  const getapi = () => {
    axios.get(api).then((value) => {
      console.log(value);
      setimage(value.data.results);
    });
  };
  return (
    <div>
     
      <div className="start">
        armaan
        <div className="innerstart">
          armaan
          <div className="inner2start">
            <h1>Armaan Gallary</h1>
            <p>this is our sem 4 mini project</p>


            <div className="border-1 f12 d-flex">
              {/* <button onClick={getapi} className="inp1 ">
                <SearchIcon style={{ color: "black", fontSize: "px" }} />
              </button> */}
              <input
                type="text"
                name=""
                placeholder="Search"
                className="fs-3 border-0 form-control text-dark"
                id="inp"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <button onClick={getapi} className="inp1 ">
                <SearchIcon style={{ color: "black", fontSize: "70px" }} />
              </button>

              </div>
            
            
          </div>
        </div>
      </div>

      
      <div className="row d-flex flex-row">
       

        {image.map((value, index) => {
          return (
            <div key={index} className="col-6 my-5   ">
             
                

                
                {/* download <DownloadIcon style={{ color: "black", fontSize: "70px" }} /> */}
                {/* <UrlImageDownloader   imageUrl={value.urls.small} /> */}
                {/* <SearchIcon style={{ color: "black", fontSize: "70px" }} /> */}
              <div class="container ">

        <div class="card ">
          <img
                  src={value.urls.small}
                  className="card-img-top  "
                  alt="request is over"
                  style={{ width: "100%", height: "200%" }}
                />
                <h1 className="text">{search}</h1>
          <div class="border">
            
          <div className="likes bg-dark">like 529</div>
          </div>
        </div>
        
        
      </div>
     
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default Nav;
