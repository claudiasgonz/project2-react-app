import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"

function CommentCard({ comment }) {
    console.log(comment)

    const navigate = useNavigate();


// // DELETE A COMMENT
const handleDelete = async () => {
    try {
      const confirmDelete = confirm ("Delete this comment?")
  
      if (confirmDelete) {
        // MAKE DELETE REQUEST
        const response = await axios.delete(`https://project2-react-app-server.adaptable.app/comments/${comment.id}`);
        console.log(response);
  
        // NAVIGATE TO PLANTS PAGE AFTER DELETION
        navigate(`/plants/${plantId}`);
      }
    } catch (error) {
      console.log("Error deleting comment", error)
    }
  };
  return (
    // RENDER COMMENT CARD
    <div className="comment-card">
    
        <h3>{comment.title}</h3>
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
    

            {/* DELETE BUTTON */}
            <button onClick={handleDelete}>
              Delete
            </button>

            <Link>
            <button>
                Edit
            </button>
            </Link>
    </div>
  )
}

export default CommentCard