import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import * as ShelvesApi from '../../services/ShelvesAPI'

class Bookshelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string,
        onUpdateBook: PropTypes.func.isRequired
    }

    static defaultProps = {
        shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read'])
    }

    render() {
        const { shelf, books, onUpdateBook } = this.props
        let currentShelf = ShelvesApi.get(shelf)

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{currentShelf.description}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={books} onUpdateBook={onUpdateBook} />
                </div>
            </div>
        )
    }
}
export default Bookshelf