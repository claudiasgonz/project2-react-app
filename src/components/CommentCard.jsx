import { useNavigate } from "react-router-dom";
import axios from "axios";

function CommentCard({ comment }) {
    console.log(comment)


// // DELETE A COMMENT
// const handleDelete = async () => {
//     try {
//       const confirmDelete = confirm ("Delete this comment?")
  
//       if (confirmDelete) {
//         // MAKE DELETE REQUEST
//         const response = await axios.delete(`https://project2-react-app-server.adaptable.app/plants/${plantId}?_embed=comments`);
//         console.log(response);
  
//         // NAVIGATE TO PLANTS PAGE AFTER DELETION
//         navigate(`/plants/${plantId}`);
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   };
  return (
    // RENDER COMMENT CARD
    <div className="comment-card">
    
        <h3>{comment.title}</h3>
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
    

            {/* DELETE BUTTON
            <button onClick={handleDelete}>
              Delete
            </button> */}

            <button>
                Edit
            </button>
    </div>
  )
}

export default CommentCard