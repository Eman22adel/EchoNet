import "./online.css";
function Online({ friend }) {
	return (
		<div className="online">
			<div className="online_img">
				<img src={friend.img} alt="" />
				<span
					className="status"
					style={{
						backgroundColor: friend.state === "online" ? "limegreen" : "gray"
					}}
				></span>
			</div>
			<p className="rightbarbottom_text">{friend.name}</p>
		</div>
	);
}

export default Online;
