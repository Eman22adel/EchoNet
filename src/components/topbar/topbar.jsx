import { useState, useEffect } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			if (window.innerWidth > 800) {
				setMenuOpen(false); // نقفل القائمة لو الشاشة كبيرة
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="topbar_container">
			{/* Left: Logo */}
			<div className="topbar_left">
				<img src="/assets/logo.png" alt="Logo" className="logo" />
			</div>

			{/* Center: Search Bar */}
			<div className="topbar_center">
				<div className="search_bar">
					<Search className="topbar_search_icon" />
					<input placeholder="Search..." className="searchInput" />
				</div>
			</div>

			{/* Right: Icons and Profile */}
			<div className="topbar_right">
				<div className="topbar_links">
					<Link
						to="/"
						className="topbar_linkhome"
						style={{ color: "white", textDecoration: "none" }}
					>
						Home
					</Link>

					<Link
						to="/login"
						className="topbar_linklogin"
						style={{ color: "white", textDecoration: "none" }}
					>
						Log in
					</Link>
				</div>
				<div className="tapbar_icons">
					<div className="tapbar_icons_item">
						<Person />
						<span className="topbar_Icons_badge">1</span>
					</div>
					<div className="tapbar_icons_item">
						<Chat />
						<span className="topbar_Icons_badge">2</span>
					</div>
					<div className="tapbar_icons_item">
						<Notifications />
						<span className="topbar_Icons_badge">3</span>
					</div>
				</div>
				<div>
					<Link
						to="/profile"
						className="topbar_link"
						style={{ color: "white", textDecoration: "none" }}
					>
						<img
							src="/assets/person/1.jpeg"
							alt="Profile"
							className="topbar_img"
							onClick={toggleMenu}
						/>
					</Link>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{menuOpen && windowWidth <= 800 && (
				<div className="mobile_dropdown_menu">
					<div className="search_bar">
						<Search className="topbar_search_icon" />
						<input placeholder="Search..." className="searchInput" />
					</div>

					<div className="topbar_links">
						<Link
							to="/"
							className="topbar_link"
							onClick={() => setMenuOpen(false)}
						>
							Homepage
						</Link>
						<Link
							to="/profile"
							className="topbar_link"
							onClick={() => setMenuOpen(false)}
						>
							Timeline
						</Link>
					</div>
					<div className="tapbar_icons">
						<div className="tapbar_icons_item">
							<Person />
							<span className="topbar_Icons_badge">1</span>
						</div>
						<div className="tapbar_icons_item">
							<Chat />
							<span className="topbar_Icons_badge">2</span>
						</div>
						<div className="tapbar_icons_item">
							<Notifications />
							<span className="topbar_Icons_badge">3</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
