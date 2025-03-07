import React, {useState} from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
function Header(props) {
    const [text, setText] = useState("");

    function clear() {
        setText("");
    }

    function enter(e) {
        if (e.key === "Enter") {
            e.target.blur();
            props.handleSelect("search") 
            props.handleSubmit((prev) => {
                return !prev
            })
            setText("");
        }
    }
    function handleChange(event) {
        setText(event.target.value)
        props.handleQuery(event.target.value)
    }
    function handleClick(event) {
        if (event.target.id === "movie") {
            props.handleType("movie")
        } else if (event.target.id === "tv") {
            props.handleType("tv")
        } else if (event.target.id === "best") {
            props.handleSelect("best")
            setText("");
        } else if (event.target.id === "trending") {
            props.handleSelect("trending")
            setText("");
        } else if (event.target.id === "home") {
            props.handleSelect("discover")
            setText("");
            
        } else if (event.currentTarget.id === "search") {
            props.handleSelect("search") 
            props.handleSubmit((prev) => {
                return !prev
            })
            setText("");
        }
    }
    return (
        <>
            <div className="header" style={{fontSize:"2rem"}}>
            
                <div className="title-block">
                    <h1 className="title" onClick={handleClick} id="home" color="red">iamdb</h1>
                    <img className="icon-title"src="https://cdn-icons-png.flaticon.com/128/6301/6301536.png" loading="lazy" alt="pop corn " title="pop corn " ></img>
                </div>
                <Button onClick={handleClick} id="movie" color="inherit" className="toggle-button" style={{fontSize:"1.5rem"}}>Movies</Button>
                <Button onClick={handleClick} id="tv" color="inherit" style={{fontSize:"1.5rem"}}>Tv Series</Button>
                <Button onClick={handleClick} id="best" color="inherit" style={{fontSize:"1.5rem"}}>Top rated</Button>
                <Button onClick={handleClick} id="trending" color="inherit" style={{fontSize:"1.5rem"}}>trending</Button>
                <div className="searchbar" style={{ color: "" }}>
                    <IconButton aria-label="search" color="inherit" id="search" onClick={handleClick}>
                        <SearchIcon />
                    </IconButton>
                    <TextField id="standard-basic" label="Search" variant="standard" onChange={handleChange} value={text} onKeyDown={enter}
                               sx={{
                                    '& .MuiInput-underline:before': {
                                    borderBottom: '2px solid #FFAA33',  // Change the underline color before focus
                                    },
                                    '& .MuiInput-underline:after': {
                                    borderBottom: '2px solid #FFAA33',  // Change the underline color after focus
                                   },
                                   '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#FFAA33',  // Keep the label color when focused
                                    },
                                    '& .MuiFormLabel-root': {
                                    color: ' #FFAA33',  // Change the label color
                                    },
                                    '& .MuiInput-root': {
                                        color: 'white',  // Change text color inside the input field
                                        paddingRight: '30px'
                                    },
                        }}
                    />
                        
                    
                    <IconButton aria-label="search" color="inherit" id="clear" onClick={clear}>
                            <ClearIcon />
                    </IconButton>
                    
                </div>

            </div>  
        </>       
    );
}

export default Header;

/*<Button  id="search" onClick={handleClick} color="inherit" ></Button> */