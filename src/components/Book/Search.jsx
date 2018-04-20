import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'
import BooksGrid from './BooksGrid'

/**
 * Search book
 */
class SearchBook extends Component {

    static propTypes = {
        allBooks: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query })
    };

    /**
     * Filter the book list by query
     * @param {string} query - Search string for filter book by title or authors
     * @returns An array filterd by query
     */
    filterQuery = (query) => {
        const match = new RegExp(escapeRegExp(query), 'i')
        return this.props.allBooks.filter(
            (book) => match.test(book.title) || match.test(book.authors)
        )
    };

    render() {
        const { query } = this.state
        const { onUpdateBook } = this.props

        let showingBooks
        showingBooks = (query) ? this.filterQuery(query) : this.props.allBooks
        showingBooks.sort(sortBy['title'])

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                {query.length && (
                    <div className="search-books-results">
                        <BooksGrid books={showingBooks} onUpdateBook={onUpdateBook} />
                    </div>
                )}
            </div>
        );
    }
}

export default SearchBook