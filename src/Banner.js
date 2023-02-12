import React, { useState , useEffect} from 'react'
import './Banner.css'
import axios from './axios'
import requests from './requests'
function Banner() {

const [movie,setMovie] =useState([]);

useEffect(()=>{
  async function fetchData(){
    const request= await axios.get(requests.fetchNetflixOrigionals);
    console.log(request);
    setMovie(
request.data.results[
  Math.floor(Math.random()*request.data.results.length-1)
]
    )
    return request;
   
  }
  fetchData();
  
},[])

 // console.log(movie);




function truncate(string,n){
   return string?.length>n?string.substr(0,n-1)+ '...': string;
}

  return (
    <header className='banner' style={
        {
            backgroundSize: "cover",
              backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSro41fOopUogALY5ZmW60sv5Us7cNNFmmi5g&usqp=CAU")`,
            backgroundPosition: "center center"
        }
    }>
        <div className="banner_contents">
            <div className="banner_title">
                Movie Name
            </div>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{truncate(`This is Movie descripttion `,150)}</h1>
        </div>
        <div className="banner--fadeBottom" />

    </header>
  )
}

export default Banner
