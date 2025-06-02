import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import './home.css'

function Home() {
	return (
		<>
			<Topbar />
			<div className="homecontainer">
				<Sidebar />
				<Feed />
				<Rightbar/>
			</div>
		</>
	);
}

export default Home;
