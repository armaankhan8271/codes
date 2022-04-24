import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Rec.css";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Rec = () => {
  const [search, setsearch] = useState("");
  const [recipies, setrecipies] = useState([]);

  const appid = "80043f68";
  const appkey = "938d7b62614bbc2dc4287da1fafa52fd	";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getrecipies = async () => {
      const result = await Axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${appkey}`
      );
      console.log(result);

      setrecipies(result.data.hits);
    };
  }, [search]);
  const getrecipies = async () => {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${appkey}`
    );
    console.log(result);

    setrecipies(result.data.hits);
  };
  return (
    <div className="bg234 ">
      <input
        className="input12 "
        type="text"
        placeholder="serach"
        name="psw"
        value={search}
        id="borderdemo"
        onChange={(e) => setsearch(e.target.value)}
        required
      />
      <button onClick={getrecipies} className=" i">
        <SearchIcon
          className="i "
          style={{ color: "black", fontSize: "80px" }}
        />
      </button>

      <div className=" contain row my-5">
        {recipies.map((recipe) => {
          return (
            <div className="bg543 column">
              <div class="recipe-card">
                <aside>
                  <img
                    className="rounded-circle imgg"
                    src={recipe.recipe.image}
                    alt="wait"
                  />

                  <a style={{color: 'white',fontSize: "35px",margin:"-10" }} href={recipe.recipe.shareAs} class="butto ">
                  More  <ArrowRightIcon
                      style={{ color: "white", fontSize: "95px" }}
                    />
                  </a>
                </aside>

                <article>
                  <h4>{recipe.recipe.label}</h4>

                  <ul>
                    <li>
                      <span>Calories:{Math.round(recipe.recipe.calories)}</span>
                    </li>
                    <li>
                      <TimerIcon style={{ fontSize: "35px" }} />
                      <span>{Math.round(recipe.recipe.totalTime)}{Math.round(Math.random()*2)}</span>
                    </li>
                  </ul>

                  <p className="text-light">
                 <h4>healthLabels:</h4> {recipe.recipe.healthLabels}
                  </p>

                  <p class="ingredients text-light">
                    <h4>Ingredients:&nbsp;</h4>
                    {recipe.recipe.ingredientLines}
                  </p>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rec;
