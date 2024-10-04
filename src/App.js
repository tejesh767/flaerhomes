import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import bookList from './components/bookList'
import Header from './components/Header'

import Home from './components/Home'
import MyLibrary from './components/MyLibrary'
import NotFound from './components/NotFound'
import BookDetails from './components/BookDetails'
import './App.css'

class App extends Component {
  state = {cartList: []}

  handleAddToLibrary = id => {
    const addInfo = bookList.find(each => each.id === Number(id))
    this.setState(prev => ({
      cartList: [...prev.cartList, addInfo],
    }))
  }

  render() {
    const {cartList} = this.state
    console.log(cartList)
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/MyLibrary"
            render={props => <MyLibrary {...props} cartList={cartList} />}
          />
          <Route
            exact
            path="/blogs/:id"
            render={props => (
              <BookDetails
                {...props}
                onAddToLibrary={this.handleAddToLibrary}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App
