import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
            <Link to="/">
                <Button variant='success'>
                    Back to home
                </Button>
            </Link>
            {
                items.map(item => (
                    <div>
                    <p>{item.EMAIL}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default SearchResults;