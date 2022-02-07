import Results from "./Results";
import Search from "./Search";
import React, {useState, useEffect} from 'react'
import './SearchContainer.css'

// const gif = {
//     "data": [
//       {
//         "type": "gif",
//         "id": "iuHaJ0D7macZq",
//         "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
//         "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
//         "rating": "pg",
//         "images": {
//           "fixed_height": {
//             "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
//           }
//         }
//       },
//       {
//         "type": "gif",
//         "id": "Z1kpfgtHmpWHS",
//         "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
//         "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
//         "rating": "g",
//         "images": {
//           "fixed_height": {
//             "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
//           }
//         }
//       }
//     ],
//     "meta": {
//       "status": 200,
//       "msg": "OK"
//     },
//     "pagination": {
//       "total_count": 1947,
//       "count": 25,
//       "offset": 0
//     }
// }


const SearchContainer = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    // const [gif, setGif] = useState([])
    // const [loading, setLoading] = useState(true)


    // APP CONFIG
    let API_URL = "http://api.giphy.com/v1/gifs/search"
    
    async function getGif(){
        try {
            const res = await fetch(API_URL+`?q=${search}&limit=10&api_key=${process.env.REACT_APP_API_KEY}`)
            const gifData = await res.json()
            // setGif([gifData,...gif])
            setResults(gifData.data)
            // setLoading(false)
            // console.log(results)
            // console.log(gif.data[0].embed_url)
        }
        catch(err){
            console.log(err)
        }
            
    }

    useEffect(()=>{
        getGif()
    },[search])
    return(
        <>
            <section className="SearchArea">
                <h2>Giphy Search</h2>
                <p>The true source for all things giphy</p>
            </section>
            <Search search={search} setSearch={setSearch} getGif={getGif}/>
            <Results search={search} results={results}/>
        </>
    )
}

export default SearchContainer