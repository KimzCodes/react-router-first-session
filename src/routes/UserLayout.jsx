import React from "react";
import { Outlet, Link } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="wrapper2">
      <div className="nav">
        <ul>
          <li>
            <Link to={`${1}/edit`}>edit</Link>
          </li>
          <li>
            <Link to="/">logout</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
