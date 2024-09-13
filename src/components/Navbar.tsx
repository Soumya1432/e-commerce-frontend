import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className="w-full flex justify-between items-center p-2 bg-white ">
			<div className="">
				<span>
					<Link to="/">
					<h1 className="text-emerald-900 text-3xl  ">GreenNatures</h1>
					</Link>
				</span>
			</div>

			<div className="flex">
				<ul className="flex justify-center space-x-8 ">
					<Link to={"/"}>
					<li className="text-lg text-slate-900 hover:text-slate-700 cursor-pointer  ">
						Home
					</li>
					</Link>
					<li className="text-lg text-slate-900 hover:text-slate-700 cursor-pointer ">
						Blog
					</li>
					<li className="text-lg text-slate-900 hover:text-slate-700 cursor-pointer ">
						About Us
					</li>
					<li className="text-lg text-slate-900 hover:text-slate-700 cursor-pointer ">
						Contact Us
					</li>
					<Link to={"/product"}>

					<li className="text-lg text-slate-900 hover:text-slate-700 cursor-pointer ">
						Products
					</li>
					</Link>
				</ul>
			</div>

			<div className="flex justify-center space-x-20 items-center">
				<input
					type="text"
					placeholder="Search here"
					className="px-10 py-2 text-sm border-2 rounded-lg  "
				/>
				<div className="flex justify-between space-x-2 items-center">
					<button className="text-xl bg-slate-100 gap-2 text-slate-600 flex items-center px-4 py-2 rounded-lg">
						<FaCartShopping /> Cart
					</button>
					<button className="px-6 py-2 rounded-lg underline border border-gray-500 text-md  items-center flex gap-2">
						<FiLock /> Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
