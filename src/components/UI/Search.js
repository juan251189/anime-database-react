import React from 'react'
import classes from './Search.module.css';

function Search(props) {
    return (
        <form onSubmit={props.onSearchHandler} className={classes['search-container']}>
            <input 
            className={classes['search-bar']}
             type="search" 
             placeholder="What Anime are you into ?"
             value={props.search}
             onChange={e => props.setSearch(e.target.value)}
             ></input>
        </form>
    )
}

export default Search
