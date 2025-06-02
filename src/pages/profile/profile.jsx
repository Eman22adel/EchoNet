import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import './profile.css'
function Profile() {
	return (
		<>
			<Topbar />
			<div className="profile_container">
				<Sidebar />
				<div className="profile_right">
					<div className="profile_righttop">
						<img className="profile_topbg" src="assets/post/3.jpeg" alt="" />
						<div className="profile_topperson">
							<img src="assets/person/7.jpeg" alt="" />
							<p style={{ fontWeight:'bolder' , fontSize:'2rem'}}>travis thomas</p>
							<p style={{ fontWeight:'lighter' }}>hello my friends</p>
						</div>
					</div>
					<div className="profile_rightbottom">
						<Feed />
						<Rightbar Profile/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
