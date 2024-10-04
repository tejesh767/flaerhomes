import './index.css'
import {Link} from 'react-router-dom'

const BookCard = props => {
  const {item} = props
  const {author, genre, title, rating, id} = item
  const imageUrl =
    'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg'
  return (
    <Link to={`blogs/${id}`} className="hws">
      <div className="card">
        <img src={imageUrl} className="image" alt=" " />
        <div className="second">
          <h2 className="title">{title}</h2>
          <p className="genre">
            <span>Genre </span>: {genre}
          </p>
          <p className="author">
            <span>Author </span>: {author}
          </p>
          <p className="rating">
            <span>Rating </span>: {rating}
          </p>
        </div>
      </div>
    </Link>
  )
}
export default BookCard
