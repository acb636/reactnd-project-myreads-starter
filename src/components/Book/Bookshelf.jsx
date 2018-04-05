import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger'

export default class Bookshelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string
    }

    static defaultProps = {
        shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read'])
    }

    render() {
        const { shelf, books } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.key}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.cover})` }}></div>
                                        <BookshelfChanger />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors.join('; ')}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}