import { useState,useEffect } from 'react';
import './App.css';

import Header from './components/Layout/Header';
import SideBar from './components/Layout/SideBar';
import MainContent from './components/Anime/MainContent';

function App() {

 const [search, setSearch] = useState("");
 const [top, setTop] = useState([]);
 const [animeList, setAnimeList] = useState([]);
 

 useEffect(() => {
 getTopAnime();
 },[])
 
 const getTopAnime= async () =>{
   const result = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
   .then(response => response.json());

   setTop(result.top.slice(0,5));
 }

 const searchHandler =  (e) =>{
   e.preventDefault();
   
   searchFetch(search);
   
   
 }

 const searchFetch = async (query) =>{
  const srch = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
  .then(res => res.json());

  setAnimeList(srch.results);
 }


  return (
    <div className="App">
     <Header />
     <SideBar top={top}/>
     <MainContent 
        onSearchHandler={searchHandler}
        search={search}  
        setSearch={setSearch}
        animeList={animeList}
        />
    </div>
  );
}

export default App;
