import axios from "axios";
import React, { useEffect, useState } from "react";

const Trending = () => {
  const [content, setContent] = useState([]);

  const FetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key${process.env.REACT_APP_API_KEY}`
    );

    console.log(data);

    setContent(data.results);
  };

    useEffect(() => {
      FetchTrending();
    }, [])

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending"></div>
    </div>
  );
};

export default Trending;
