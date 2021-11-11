import React from "react";
import { useLocation } from 'react-router-dom'


function Categories(props){
  
    const { news, fetching } = props.news;
    const location = useLocation();
    console.log(location.pathname);
    if (fetching) {
      return <div> Yükleniyor </div>;
    } else {
      
      return (
        
        <div
          style={{ borderColor: "blue", borderStyle: "solid", margin: "2px" }}
        >

          <pre>{JSON.stringify(news, null, 3)}</pre>
        </div>
      );
    }
  }


export default Categories;
