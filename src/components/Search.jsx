import React, {useState, useEffect} from 'react'
import './Search.css'

function Search(props){

    const HandleSearchChange = (evt)=>{
        props.setSearch(evt.target.value)
        // console.log(evt.target.value)
    }
    // console.log(props)

    const HandleSearch = (evt)=> {
        props.getGif(props.search)
        evt.preventDefault()
    }


    return(
        <>
            <form 
                className="search"
                onSubmit={HandleSearch}
                >
                <input
                    type="search"
                    id="search"
                    placeholder="Search..." 
                    value={props.search}
                    onChange={HandleSearchChange}
                />
                <button >Search</button>
            </form>
        </>
    )
}

export default Search