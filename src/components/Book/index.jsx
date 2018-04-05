import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBook extends Component {
    static propTypes = {
        allBooks: PropTypes.array.isRequired
    }

    getBooksByShelf() {
        return Object.values(this.props.allBooks.reduce((result, {
            id,
            title,
            authors,
            imageLinks,
            shelf
        }) => {
            if (!result[shelf]) result[shelf] = {
                key: shelf,
                name: shelf,
                books: []
            };

            result[shelf].books.push({
                key: id,
                title,
                authors,
                cover: imageLinks.smallThumbnail
            });
            return result;
        }, {}))
    }

    render() {

        let shelves = this.getBooksByShelf()

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (
                            <Bookshelf
                                key={shelf.key}
                                shelf={shelf.name}
                                books={shelf.books}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

export default ListBook