import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as ShelvesAPI from '../../services/ShelvesAPI'

class BookshelfChanger extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        currentShelf: PropTypes.string,
        onUpdateBook: PropTypes.func.isRequired
    }

    static defaultProps = {
        currentShelf: 'none'
    }

    render() {
        const { book, currentShelf, onUpdateBook } = this.props

        let shelves = ShelvesAPI.getAll()

        return (
            <div className="book-shelf-changer">
                <select value={currentShelf} onChange={(event) => onUpdateBook(book, event.target.value)}>
                    <option value="moveTo" disabled>Move to...</option>
                    {shelves.map((shelf) => (
                        <option
                            value={shelf.value}
                            key={shelf.value}>
                                {shelf.description}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

export default BookshelfChanger