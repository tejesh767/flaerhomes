import {Component} from 'react'
import bookList from '../bookList'
import './index.css'

class BookDetails extends Component {
  state = {newObject: {}}

  componentDidMount() {
    this.yeah()
  }

  yeah = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const fullInfo = bookList.find(each => each.id === Number(id))
    const newData = {
      author: fullInfo.author,
      description: fullInfo.description,
      genre: fullInfo.genre,
      id: fullInfo.id,
      publicationYear: fullInfo.publication_year,
      rating: fullInfo.rating,
      title: fullInfo.title,
    }
    this.setState({newObject: newData})
  }

  forwardingId = () => {
    const {newObject} = this.state
    const {onAddToLibrary} = this.props

    onAddToLibrary(newObject.id)
  }

  render() {
    const {newObject} = this.state
    const {
      author,
      description,

      title,
      genre,
      publicationYear,
      rating,
    } = newObject

    return (
      <div className="outerCard">
        <div className="cardContainer">
          <div className="imgContainer">
            <img
              src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
              alt=""
              className="image1"
            />
          </div>

          <div className="topContent">
            <h2 className="mainTitle">{title}</h2>
            <div className="secondPart">
              <p className="year1">{publicationYear}</p>
              <p className="rating1">{rating}</p>
            </div>
          </div>
          <p>
            <span>Genre : </span> {genre}
          </p>
          <p>
            <span>Description : </span>
            {description}
          </p>
          <p className="byAuthor">
            <span>by - </span> {author}
          </p>
          <div className="buttonContainer">
            <button type="button" onClick={this.forwardingId}>
              {' '}
              Add to Library
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default BookDetails
