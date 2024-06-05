import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCommentForm(props) {
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const plantId = props.plantId

        try {
            const response = await axios.post(`https://project2-react-app-server.adaptable.app/plants/${plantId}?_embed=comments`,
            {
                title,
                username,
                text
            });
        console.log(response);

        navigate(`/plants/${plantId}`);
        } catch (error) {
        console.log(error)
    }
};

  return (
    <div className="add-comment-form">

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
                <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            
            <button>Cancel</button>
            
            <button type="submit">Submit Comment!</button>

        </form>   
    </div>
  )
}
export default AddCommentForm

// COMMENTS SECTION COMPONENT SHOULD:
// LOAD COMMENT CARD FOR EACH COMMENT, 
// ADD A COMMENT BUTTON IN COMMENTS COMPONENT
// EACH COMMENT CARD HAS A DELETE BUTTON AND EDIT BUTTON
// BUTTON IN COMMENT CARD POPS UP MODAL WITH ADD A COMMENT FORM
// ADD A COMMENT FORM HAS FORM, SUBMIT BUTTON, CANCEL BUTTON
