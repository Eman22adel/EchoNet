import "./login.css";
import { Link } from "react-router-dom";
import Topbar from "../../components/topbar/topbar";

function Login() {
	return (
		<div className="login">
			<Topbar />
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLeftLogo">Echonet</h3>
					<p className="loginLefttext">
						content with friends and the world around you on echonet
					</p>
				</div>

				<div className="loginRight">
					<div className="loginForm">
						<input className="loginInput" type="email" placeholder="email" />
						<input
							className="loginInput"
							type="password"
							placeholder="password"
						/>
						<button className="loginSignbtn">log in</button>
						<p
							style={{
								color: "blue",
								textAlign: "center",
								fontWeight: "200",
								cursor: "pointer"
							}}
						>
							Don’t have an account?
						<Link to="/register" className="topbar_link" style={{ margin:'1rem' , fontWeight:'bold' }}>
								Sign up
						</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
