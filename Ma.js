import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState } from "react";
import './ma.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



const Ma = () => {
    const [image, setimage] = useState([]);
  const [search, setsearch] = useState([])
  const api = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=WbHbsT0exIa_rIiZlu2i92iQufzyRmy7eXKMFooTYms`;

  const getapi = () => {
    axios.get(api).then((value) => {
      console.log(value);
      setimage(value.data.results);
    });
  };
  return (
    <div className="bg1">
        <div className="text-center my-5  color-white">
      {/* <div className="types">
        <ul className="d-flex fs-1  ">
          <li  className="types1"> <a href=""></a>  armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
        </ul>
        </div> */}
    <h1 className="display-1 fw-bolder my-3 ">
      {" "}
      PHOTO GALLARY {" "}
    </h1 >
    <hr />
  </div>
  <div className=" bb">
    <div className="fontpassword d-flex firsts container">
      <input
        className="form-control bg-dark bds fs-3 border-0  text-light"
        type="text"
        placeholder="serach"
        name="psw"
        value={search}
        id="borderdemo"
        onChange={(e) => setsearch(e.target.value)}
        required
      />
      
     
  <button onClick={getapi} className="fs-1 borderdemo  bg-dark">
  <SearchIcon style={{ width: "90px", height: "60px",color:"white" }} />
  </button>
    </div>
  </div>
  <div className="  ">
    <div className="row  ">
      {image.map((value, index) => {
        return (
          
          <div className="col-6 my-5   ">
            
            <div className="card box d-flex bg-dark border-1 " style={{width: "25rem"}}>
            <a href={value.links.html} target="_blank" download="image">
              <img src={value.urls.small_s3} className="card-img-top  " alt="request is over"  /></a>



              {/* {console.log(value.current_user_collections.liked_by_user)} */}
            </div>
            <h1 className="fs-1 col-3 likes text-center rounded-pill bg-dark text-light"><FavoriteIcon style={{ color: "red", fontSize: "55px" }}/>{value.user.total_likes}1</h1>
            {/* <h1 className="fs-1 col-3 likes text-center rounded-pill bg-dark text-light"><ThumbDownIcon style={{ color: "red", fontSize: "55px" }}/>0{(value.user.total_likes)}</h1> */}
         {/* <h1 className="fs-1">{value.links.download}</h1> */}
         
        

         
          </div>
        );
      })}
    </div>
  </div></div>
  )
}

export default Ma