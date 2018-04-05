import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './services/BooksAPI'
import ListBooks from './components/Book'
import SearchBook from './components/Book/Search'
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

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <ListBooks allBooks={this.state.books} />
          )}
        />

        <Route path='/search' component={SearchBook} />
      </div>
    );
  }
}

export default BooksApp