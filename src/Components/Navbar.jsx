import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Social Media Analytics
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">Dashboard</Link>
          <Link to="/posts" className="text-white hover:text-gray-400">Posts</Link>
          <Link to="/audience" className="text-white hover:text-gray-400">Audience</Link>
          <Link to="/comparison" className="text-white hover:text-gray-400">Comparison</Link>
          <Link to="/reports" className="text-white hover:text-gray-400">Reports</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
