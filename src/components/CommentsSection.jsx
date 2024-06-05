import { Link } from "react-router-dom"
import CommentCard from "./CommentCard"

function CommentsSection({ plantId }) {
  return (
    <div className="comments-section">
        <h1>Comments</h1>
        
        <Link to={`/plants/${plantId}/addcomment`}>
          <button>Add Comment!</button>
        </Link>

        <CommentCard />

    </div>
  )
}

export default CommentsSection