import { useEffect, useState } from "react"



const SearchBar = () => {
    const [search, setSearch] = useState();
    const Change = (e) => {
    setSearch(e.currentTarget.value)
    }
    useEffect(() => {
            
            // call de api -> sa caute tasku cu autocomplete si sugestii 


     }, [search])



    return (
        <div>
            <input type="text" onChange={Change}></input>
            </div>
    )
}


export default SearchBar;