import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger'

class BooksGrid extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render() {
        const { books, onUpdateBook } = this.props

        return (
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                    }}>
                                </div>
                                <BookshelfChanger
                                    key={book.id}
                                    book={book}
                                    currentShelf={book.shelf}
                                    onUpdateBook={onUpdateBook}
                                />
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors.join('; ')}</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default BooksGrid