import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function DuplicateResults() {
    useEffect(() => {
      fetchEmails()
    }, [])

    const [emails, setEmails] = useState([])

    const fetchEmails = async() => {
        const data = await fetch('http://localhost:4000/')
        const emails = await data.json()
        setEmails(emails)
    }
    // const fetchEmails = async() => {
    //     const data = await fetch('/duplicate-results')
    //     const emails = await data.json()
    //     setEmails(emails)
    // }
    
    return ( 
        <div>
            <Link to="/">
                <Button variant='success'>
                    Back to home
                </Button>
            </Link>
            {
                emails.map(email => (
                    <div>
                    <p>{email.test}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default DuplicateResults;