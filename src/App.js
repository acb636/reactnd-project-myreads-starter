import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './services/BooksAPI'
import Books from './components/Book'
import Search from './components/Book/Search'
import sortBy from 'sort-by'
import './styles/App.css'

/**
 * Main component
 */
class BooksApp extends Component {

    state = {
        books: [],
        searchResults: []
    }

    /**
     * Get all books
     */
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books.sort(sortBy['title']) })
        });
    }

    /**
     * Persists the updated information of a book
     * @param {object} book - Complete book information
     * @param {string} moveTo - The name of the shelf to move the book
     */
    updateBook = (book, moveTo) => {
        book.shelf = moveTo
        this.setState((state) => ({
            books: state.books.filter((oldBook) => oldBook.id !== book.id).concat([book])
        }));

        BooksAPI.update(book, moveTo);
    };

    searchBook = (query) => {
        BooksAPI.search(query).then((result) => {
            if (!result.hasOwnProperty('error')) {
                this.setState({ searchResults: result })
            } else {
                this.setState({ searchResults: [{}] })
            }
        });
    };

    render() {
        return (
            <div className="app">
                <Route
                    exact path='/'
                    render={() => (
                        <Books
                            allBooks={this.state.books}
                            onUpdateBook={this.updateBook}
                        />
                    )}
                />

                <Route
                    path='/search'
                    render={() => (
                        <Search
                            allBooks={this.state.searchResults}
                            onUpdateBook={this.updateBook}
                            onSearchBook={this.searchBook}
                        />
                    )} />
            </div>
        );
    }
}

export default BooksApp