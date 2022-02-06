import React, {useState} from 'react'
import Search from './Search'

const Results = (props) => {
    console.log(props.gif.data)
    return(
        <>
            <h3>Results Component Rendered</h3>
            {/* {props.gif.data[0].url} */}
        </>
    )
}

export default Results