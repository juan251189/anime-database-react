
import classes from './SideBar.module.css';

function SideBar({top}){
    return(
        <div className={classes.sidenav}>
            <h2>Top Anime</h2>
        
        <ul className={classes.list}>
           {top.map(item => (
            <a href={item.url}><li id={item.mal_id} 
            key={item.mal_id}
            >{item.title}</li></a>
            ))}
        </ul>
        </div>
    )
}

export default SideBar;