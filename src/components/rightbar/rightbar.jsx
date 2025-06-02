import "./rightbar.css";
import friends from "../../persondata";
import Online from "../online/Online";

function Rightbar({ Profile }) {
	const Homerightbar = () => {
		return (
			<div className="rightbar">
				<div className="rightbar_top">
					<img className="rightbartop_img" src="assets/gift.png" alt="" />
					<div className="righttop_text">
						<p style={{ fontWeight: "lighter" }}>
							<span style={{ fontWeight: "bold" }}>pola foster</span> and 3{" "}
							<span style={{ fontWeight: "bold" }}>other friends</span> have a
						</p>
						<p style={{ fontWeight: "lighter" }}>birthday today</p>
					</div>
				</div>
				<div className="rightbar_center">
					<img className="rightbarcenter_img" src="assets/ad.png" alt="" />
				</div>
				<div className="rightbar_bottom">
					<p style={{ fontWeight: "bolder" }}>online friends</p>
					{friends.map((friend, index) => (
						<Online friend={friend} key={index} />
					))}
				</div>
			</div>
		);
	};
	const Profilerightbar = () => {
		return (
			<div className="rightbar">
				<div className="user_info">
					<h2>User info</h2>
					<div className="rightbarInfoItem">
						<span className="rightbatInfoKey">city:</span>
						<span className="rightbatInfovalue">New york</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbatInfoKey">from:</span>
						<span className="rightbatInfovalue">madrid</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbatInfoKey">relationship:</span>
						<span className="rightbatInfovalue">single</span>
					</div>
				</div>
				<div className="user_friends">
					<h2>user friends</h2>
					<div className="user_friendlist">
						{friends.map((friend, index) => (
							<div className="user_friendsitem">
								<img src={friend.img} alt="" srcset="" />
								<p>{friend.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};
	return Profile ? <Profilerightbar /> : <Homerightbar />;
}

export default Rightbar;
