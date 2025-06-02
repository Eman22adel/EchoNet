import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
import postinfo from "../../postdata"

function Feed() {
	return (
		<div className="feed">
			<Share />
			{postinfo.map((info) => (
				<Post info={ info} />
			))}
		</div>
	);
}

export default Feed;
