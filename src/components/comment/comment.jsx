import "./comment.css";
import { Send } from "@mui/icons-material";
import { useState } from "react";

function Comment({ info }) {
	const [inputValue, setInputValue] = useState("");
	const [commentarray, setCommentArray] = useState([]);

	const handleCommentAdd = () => {
		const trimmedComment = inputValue.trim();
		if (trimmedComment === "") return;

		const newComment = {
			id: Date.now(),
			text: trimmedComment,
			name: info.name,
			img: info.img,
		};

		setCommentArray((prev) => [...prev, newComment]);
        setInputValue("");
	};

	return (
		<div className="post_comment_wrapper">
			<div className="post_entercomment">
				<img className="entercomment_img" src={info.img} alt={info.name} />
				<input
					className="entercomment_input"
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Add a comment"
				/>
				<Send className="entercomment_icon" onClick={handleCommentAdd} />
			</div>

			<div className="comments_list">
				{commentarray.map((comment) => (
					<div key={comment.id} className="single_comment">
						<img
							className="comment_user_img"
							src={comment.img}
							alt={comment.name}
						/>
						<div className="comment_content">
							<strong>{comment.name}</strong>
							<p>{comment.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Comment;
