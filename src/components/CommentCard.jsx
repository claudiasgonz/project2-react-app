import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CommentCard() {
    const [comment, setComment] = useState();

    const { commentId } = useParams ();

    useEffect(() => {
        
    })
  return (
    <div className="comment-card">
        <h2>Comment Card</h2>
    </div>
  )
}

export default CommentCard

// COMMENT DETAILS,
// EDIT 
// DELETE 