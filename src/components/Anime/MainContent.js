import React,{useState} from 'react';
import Search from '../UI/Search';
import classes from './MainContent.module.css';
import Item from './Item';
import Modal from '../UI/Modal';

function MainContent(props) {

    const [AnimeSelected, setAnimeSelected] = useState({});
    const [open, setOpen] =useState(false);


    const animeHandler = url => {
        setAnimeSelected(url);
        setOpen(true);
        console.log(url);
    }


    const hideHandler = () =>{
        setOpen(false);

        // console.log("well Done");
    }
    return (
        <div>
          {open ? 
          <Modal hide={hideHandler}>
            <div id={AnimeSelected.mal_id}> 
                <img src={AnimeSelected.image_url} />
            <div>
            <p>{AnimeSelected.score}</p>
            <h2>{AnimeSelected.title}</h2>
            <p>{AnimeSelected.synopsis}</p>
           <button onClick={()=>window.open(`${AnimeSelected.url}`,"_blank")}>Learn More</button>
           
            </div>
        </div>
            </Modal> :''}
          
            <Search onSearchHandler={props.onSearchHandler}
                search={props.search}
                setSearch={props.setSearch}
            />
            <div>
             <ul className={classes['list-anime']}>
                 {props.animeList.map(item =>(
                   
                   <Item key={item.mal_id} item={item} animeHandler={animeHandler}/>
                     
                 ))}
             </ul>
            </div>
        </div>
    )
}

export default MainContent
