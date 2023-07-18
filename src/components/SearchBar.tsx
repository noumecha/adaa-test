import React,{ useEffect, useState } from "react";
import axios from "axios";

const SearchBar= () => {

    /*const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    // Add one more state to store the authors being searched for
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://dummyjson.com/products`);
            setData(res.data);
        };
        fetchData();
    }, []);*/

    return (
        <div className='search-bar'>
            <input
                className="search"
                placeholder="Search..."
                //onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <div>{"data"}</div>
        </div>
    );
};

export default SearchBar;