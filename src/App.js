import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './services/BooksAPI'
import Books from './components/Book'
import Search from './components/Book/Search'
import './styles/App.css'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateBook = (book, moveTo) => {
    book.shelf = moveTo
    this.setState((state) => ({
      books: state.books.filter((oldBook) => oldBook.id !== book.id).concat([book])
    }))

    BooksAPI.update(book, moveTo)
  }

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