import { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import Comment from "../comment/comment";

function Post({ info }) {
	const [like, setlike] = useState(info.like);
	const [islike ,setislike] =useState(false)
	const [showcomment, setshowcomment] = useState(true);
	const handelreaction = () => {
		(islike === false) ? setlike((pre) => pre + 1) : setlike((pre) => pre - 1);
		setislike(!islike);
	};

	const handelshowcomment = () => {
        setshowcomment((pre) => !pre);
    };

	return (
		<div className="post">
			<div className="posttop">
				<div className="posttop_left">
					<img className="posttop_img" src={info.img} alt="" />
					<p className="postleft_postname">{info.name}</p>
					<span className="postleft_posttime">{info.posttime}</span>
				</div>
				<MoreVert />
			</div>
			<div className="postcenter">
				<p className="postcenter_text">{info.posttext}</p>
				<img className="postcenter_img" src={info.postimg} alt="" />
			</div>
			<div className="postbottom">
				<div className="postbottom_left">
					<img
						className="postbottom_img"
						src="assets/like.png"
						alt=""
						srcset=""
						onClick={handelreaction}
					/>
					<img
						className="postbottom_img"
						src="assets/heart.png"
						alt=""
						srcset=""
						onClick={handelreaction}
					/>
					<span>{like} people like it</span>
				</div>

				<p className="postbottom_comment" onClick={handelshowcomment}>
					comment
				</p>
			</div>
			{showcomment && <Comment info={info} />}
		</div>
	);
}

export default Post;
