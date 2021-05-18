import React from 'react';
import "./Home.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner"
import requests from "../components/Requests"
import Rows from "../components/Rows";


function HomePage(){

return(
    <div className="homePage">
    <Navbar />
    <Banner /> 
    
    <Rows title="NinjaFlix Originals" fetchURL={requests.fetchNinjaFlixOriginals} isLargeRow/>

    <Rows title="Trending" fetchURL={requests.fetchTrending} />
    <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
    <Rows title="Action" fetchURL={requests.fetchAction} />
    <Rows title="Horror" fetchURL={requests.fetchHorror} />
    <Rows title="Comedy" fetchURL={requests.fetchComedy} />
    <Rows title="Romance" fetchURL={requests.fetchRomance} />
    <Rows title="Mystery" fetchURL={requests.fetchMystery} />
    <Rows title="Western" fetchURL={requests.fetchWestern} />
    <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
);
}

export default HomePage;