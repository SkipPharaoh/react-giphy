import React, {useState} from 'react'
import Results from './Results'
import './Search.css'

function Search(props){
    const [search, setSearch] = useState("")

    const HandleSearchChange = (evt)=>{
        setSearch(evt.target.value)
        console.log(evt.target.value)
    }

    const HandleSearch = (evt)=> {
        evt.preventDefault()
    }
    const HandleResults = () => {
        for (let i=0; i < props.gif.data.length; i++) {
            // if (props.gif.data[i].id == search){
                console.log(props.gif.data[i].images.fixed_height.url)
                return (props.gif.data[i].url)
            // } else {
                // console.log("Nothing")
            // }
        }
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
                    value={search}
                    onChange={HandleSearchChange}
                />
                <button onClick={HandleResults}>Search</button>
            </form>
        </>
    )
}

export default Search