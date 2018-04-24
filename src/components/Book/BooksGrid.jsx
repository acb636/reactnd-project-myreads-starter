import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger'

/**
 * Grid containing all books
 */
class BooksGrid extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    /**
     * Get css styles for a book cover
     * @param {object} book
     * @returns The css style with a small thumbnail if the book object has it.
     */
    getBookCoverStyle = function(book) {
        const style = {
            width: 128,
            height: 193,
            backgroundImage: 'none'
        }

        if (book.hasOwnProperty('imageLinks') && book.imageLinks.hasOwnProperty('smallThumbnail')) {
            style.backgroundImage = (book.imageLinks.smallThumbnail)
                ? `url(${book.imageLinks.smallThumbnail})` : 'none'
        }

        return style
    }

    render() {
        const { books, onUpdateBook } = this.props

        return (
            <ol className="books-grid">
                {books.map((book) => (book.hasOwnProperty('id') ? (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={this.getBookCoverStyle(book)}>
                                </div>
                                <BookshelfChanger
                                    key={book.id}
                                    book={book}
                                    currentShelf={book.shelf}
                                    onUpdateBook={onUpdateBook}
                                />
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">
                                {book.authors  &&
                                    book.authors.join('; ')
                                }
                            </div>
                        </div>
                    </li>
                ) : (
                    <li key={0}>No results</li>
                )))}
            </ol>
        )
    }
}

export default BooksGrid