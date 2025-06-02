import "./register.css";
import { Link } from "react-router-dom";
import Topbar from "../../components/topbar/topbar";
function Register() {
	return (
		<div className="Register">
			<Topbar />
			<div className="RegisterWrapper">
				<div className="RegisterLeft">
					<h3 className="RegisterLeftLogo">Echonet</h3>
					<p className="RegisterLefttext">
						content with friends and the world around you on echonet
					</p>
				</div>
				<div className="RegisterRight">
					<div className="RegisterForm">
						<input
							className="RegisterInput"
							type="text"
							placeholder="username"
						/>
						<input
							className="RegisterInput"
							type="email"
							name=""
							id=""
							placeholder="email"
						/>
						<input
							className="RegisterInput"
							type="password"
							name=""
							id=""
							placeholder="password"
						/>
						<input
							className="RegisterInput"
							type="password"
							name=""
							id=""
							placeholder="password again"
						/>
						<button className="Registerbtn">create a new account</button>
						<p
							style={{ color: "blue", textAlign: "center", fontWeight: "200" }}
						>
							i have an account
							<Link to="/login" style={{ margin: "1rem", fontWeight: "bold" }}>
								log in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
