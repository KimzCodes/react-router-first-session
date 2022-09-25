import { Outlet, Link } from "react-router-dom";

const UserRoot = () => {
  return (
    <div className="wrapper2">
      <div className="nav">
        <ul>
          <li>
            <Link to="info">info</Link>
          </li>
          <li>
            <Link to="1/edit">edit</Link>
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

export default UserRoot;
