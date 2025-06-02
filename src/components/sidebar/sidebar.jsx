import { useState } from "react";
import "./sidebar.css";
import friends from "../../persondata";
import {
	RssFeed,
	Chat,
	PlayCircle,
	Group,
	Bookmark,
	HelpOutline,
	WorkOutline,
	Event,
	School,
	ArrowDropDown,
} from "@mui/icons-material";

function Sidebar() {
	const [showitem, setshowitem] = useState(false);
	const handleShowList = () => {
		setshowitem((pre) => !pre);
	};
	return (
		<div className="sidebar">
			<div className="sidebarwrapper">
				<ul className="sidebar_list">
					<li className="sidebar_list_item">
						<RssFeed className="sidebar_icon" />
						<span className="sidebar_item_text">feed</span>
					</li>
					<li className="sidebar_list_item">
						<Chat className="sidebar_icon" />
						<span className="sidebar_item_text">Chat</span>
					</li>
					<li className="sidebar_list_item">
						<PlayCircle className="sidebar_icon" />
						<span className="sidebar_item_text">PlayCircle</span>
					</li>
					<li className="sidebar_list_item">
						<Group className="sidebar_icon" />
						<span className="sidebar_item_text">Group</span>
					</li>
					<li className="sidebar_list_item">
						<Bookmark className="sidebar_icon" />
						<span className="sidebar_item_text">Bookmark</span>
					</li>
					{showitem && (
						<>
							<li className="sidebar_list_item">
								<HelpOutline className="sidebar_icon" />
								<span className="sidebar_item_text">Help Outline</span>
							</li>
							<li className="sidebar_list_item">
								<WorkOutline className="sidebar_icon" />
								<span className="sidebar_item_text">Work Outline</span>
							</li>
							<li className="sidebar_list_item">
								<Event className="sidebar_icon" />
								<span className="sidebar_item_text">Event</span>
							</li>
							<li className="sidebar_list_item">
								<School className="sidebar_icon" />
								<span className="sidebar_item_text">School</span>
							</li>
						</>
					)}
				</ul>
				<div className="sidebar_listlink">
					<button className="sidebar_listbutton" onClick={handleShowList}>
						{showitem ? "show less" : "show more"}
					</button>
						<ArrowDropDown
							style={{
								transform: showitem ? "rotate(180deg)" : "rotate(0deg)",
							}}
						/>
				</div>
			</div>
			<div className="sidebar_friendslist">
				<ul>
					{friends.map((friend, index) => (
						<li className="sidebar_frienditem" key={index}>
							<img
								src={friend.img}
								alt={friend.name}
								className="sidebar_friendimg"
							/>
							<span>{friend.name}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
