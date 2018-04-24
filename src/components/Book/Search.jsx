import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import BooksGrid from './BooksGrid'

/**
 * Search book
 */
class SearchBook extends Component {

    static propTypes = {
        allBooks: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
        onSearchBook: PropTypes.func
    }

    static defaultProps = {
        allBooks: []
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query })

        if (query.length > 2) {
            this.props.onSearchBook(escapeRegExp(query))
        }
    };

    render() {
        const { query } = this.state
        const { allBooks, onUpdateBook } = this.props

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
                {query.length > 0 && (
                    <div className="search-books-results">
                        <BooksGrid books={allBooks} onUpdateBook={onUpdateBook} />
                    </div>
                )}
            </div>
        );
    }
}

export default SearchBook