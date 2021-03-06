import React, { Component } from 'react'
import {render} from 'react-dom'

let bookList = [
    {"title":"A Little Life", "author":"Hanya Yanagihara", "pages":505},
    {"title":"Two From the Heart", "author":"Hanya Yanagihara", "pages":505},
    {"title":"Five Point Someone", "author":"Hanya Yanagihara", "pages":505}
]

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}

const Library = ({books}) => {
    return (
        <div>
            {books.map(
                (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} />
            )}  
        </div>
    )
}

render(
    <Library books={bookList}/>,
    document.getElementById('root')
)