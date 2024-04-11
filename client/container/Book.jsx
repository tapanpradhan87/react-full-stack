import React, { useState } from 'react'

function Home() {
    const [books, setBooks] = useState([]);

    const getAllBooks = async () => {
        try {
            const response = await fetch('/api/Books/getAllBooks');
            const data = await response.json()
            setBooks(data)
        } catch (e) {
            console.error('error occurd', e)
        }
    }
    return (
        <>
            <code>
                <pre>
                    {JSON.stringify(books, null, 2)}
                </pre>
            </code>
            <button onClick={() => getAllBooks()}>Get Books</button>
        </>
    )
}

export default Home