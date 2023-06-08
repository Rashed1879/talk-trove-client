import { Link } from 'react-router-dom';
import logoWhite from '../../../assets/logoWhite.png';

const Navbar = () => {
	const navOptions = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/">Instructors</Link>
			</li>
			<li>
				<Link to="/">Classes</Link>
			</li>
			<li>
				<Link to="/">Dashboard</Link>
			</li>
		</>
	);

	return (
		<div className="navbar fixed z-10 max-w-screen-xl bg-black text-white">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
					>
						{navOptions}
					</ul>
				</div>
				<Link to="/">
					<img className="w-[150px]" src={logoWhite} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navOptions}</ul>
			</div>
			<div className="navbar-end">
				<Link to="/login">
					<button className="btn btn-outline bg-black text-white border-0 hover:bg-white hover:text-black">
						Login
					</button>
				</Link>
				<div className="avatar">
					<div className="w-16 rounded-full ring ring-black">
						<img src="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
