import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function AddCommentForm(props) {
    // DEFINE STATE VARIABLES TO MANAGE FORM INPUTS
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");

    const navigate = useNavigate();

    // HANDLE FORM SUBMISSION
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { plantId } = props;

        const requestBody = { title, username, text, plantId }
    // SEND POST REQUEST TO ADD A NEW COMMENT TO PLANTID
        try {
            const response = await axios.post(`https://project2-react-app-server.adaptable.app/comments`, requestBody);
                setTitle("");
                setUsername("");
                setText("");
                props.refreshPlant();
            console.log(response);

            navigate(`/plants`);
        } catch (error) {
        console.log(error)
        }
    };

  return (
    <div className="add-comment-form">
        <h2> Add a comment</h2>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            
            <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            
            <label>Comment:</label>
                <textarea
                    type="text"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            
            <button>Cancel</button>
            
            <button type="submit">
            Submit Comment
            </button>
        </form>   
    </div>
  )
}

export default AddCommentForm