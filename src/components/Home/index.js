import './index.css'
import {Component} from 'react'
import BookCard from '../BookCard'
import bookList from '../bookList'

class Home extends Component {
  state = {updatedList: bookList, inputText: ''}

  filtering = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {updatedList, inputText} = this.state
    const finalList = updatedList.filter(each =>
      each.title.toLowerCase().includes(inputText.toLowerCase()),
    )
    console.log(inputText)
    return (
      <>
        <div className="inpContainer">
          <label htmlFor="search">Search Book : </label>
          <input
            type="search"
            id="search"
            className="searchInput"
            placeholder="Enter Book Name"
            onChange={this.filtering}
          />
        </div>

        <div className="home-container">
          {finalList.length > 0 ? (
            finalList.map(each => <BookCard key={each.id} item={each} />)
          ) : (
            <div className="no-results-container">
              <img
                src="https://cdn.dribbble.com/userupload/2905383/file/original-4ea237e94e803ddd575a66eb32198899.png?resize=400x0"
                alt="No results"
                className="no-results-image"
              />
            </div>
          )}
        </div>
      </>
    )
  }
}
export default Home
