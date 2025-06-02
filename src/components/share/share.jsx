import "./share.css";
import {
	PermMedia,
	Label,
	LocationOn,
	EmojiEmotions,
} from "@mui/icons-material";

function Share() {
	return (
		<div className="share">
			<div className="sharetop">
				<img className="sharetop_img" src="assets/person/1.jpeg" alt="" />
				<input
					className="sharetop_input"
					placeholder="what's yoyr mind safak?"
				></input>
			</div>
			<div className="sharebottom">
				<div className="sharebottom_icons">
					<div className="sharebottom_item">
						<PermMedia style={{ color: "red" }} />
						<span>Photo or video</span>
					</div>
					<div className="sharebottom_item">
						<Label style={{ color: "blue" }} />
						<span>tag</span>
					</div>
					<div className="sharebottom_item">
						<LocationOn style={{ color: "green" }} />
						<span>location</span>
					</div>
					<div className="sharebottom_item">
						<EmojiEmotions style={{ color: "orange" }} />
						<span>feeling</span>
					</div>
				</div>
				<button className="sharebottom_button">share</button>
			</div>
		</div>
	);
}

export default Share;
