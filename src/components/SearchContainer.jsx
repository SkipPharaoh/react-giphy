import Results from "./Results";
import Search from "./Search";

function SearchContainer(){
    return(
        <>
            <h2>Giphy Search</h2>
            <p>The true source for all things giphy</p>
            <Search />
            <Results />
        </>
    )
}

export default SearchContainer