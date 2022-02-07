import React, {useState} from 'react'

const Results = (props) => {
    // console.log(props)
    const ArrResults = props.results.map((giph, idx) => {
        console.log(giph)
        return <img src={giph.images.fixed_height.url} key={idx} />
    })


    return(
        <>
            <p>Giphy</p>
            {ArrResults}
        </>
    )
}

export default Results