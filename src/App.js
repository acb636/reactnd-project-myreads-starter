import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './services/BooksAPI'
import Books from './components/Book'
import Search from './components/Book/Search'
import './styles/App.css'

/**
 * Main component
 */
class BooksApp extends Component {

  state = {
    books: []
  }

  /**
   * Get all books
   */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
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

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <Books allBooks={this.state.books} onUpdateBook={this.updateBook} />
          )}
        />

        <Route
          path='/search'
          render={() => (
            <Search allBooks={this.state.books} onUpdateBook={this.updateBook} />
          )} />
      </div>
    );
  }
}

export default BooksApp