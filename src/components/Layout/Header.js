import classes from './Header.module.css';

function Header (props){
    return(
        <header className={classes.header}>
            <p>The <strong>Anime</strong> Database</p>
        </header>
    )
}

export default Header;