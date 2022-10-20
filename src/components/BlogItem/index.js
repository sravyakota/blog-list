import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <li className="list-container">
      <div className="ss">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>

      <hr className="h" />
    </li>
  )
}

export default BlogItem
