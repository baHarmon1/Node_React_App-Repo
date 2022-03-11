import React, {useEffect, useState} from 'react'

function SearchResults() {
    useEffect(() => {
      fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async() => {
        const data = await fetch('/search-results')
        const items = await data.json()
        setItems(items)
    }
    
    return ( 
        <div>
            {
                items.map(item => (
                    <div>
                    <p>{item.test}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default SearchResults;