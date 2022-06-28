import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "d7252f73c1d74be08c13b012abe8e224";
 //JSON - https://newsapi.org/v2/top-headlines?country=us&apiKey=d7252f73c1d74be08c13b012abe8e224
  useEffect(() => {
    axios
      .get(
        ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};