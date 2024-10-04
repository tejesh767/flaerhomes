import BookCard from '../BookCard'
import './index.css'

const MyLibrary = props => {
  const {cartList} = props
  console.log('propssss', cartList)
  return (
    <div className="home-container">
      <h1>My Library</h1>
      {cartList.length > 0 ? (
        cartList.map(each => <BookCard key={each.id} item={each} />)
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
  )
}

export default MyLibrary
