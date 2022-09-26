import { Outlet, Link, useNavigate } from "react-router-dom";

const UserRoot = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    //api
    navigate("/", { replace: true });
  };
  const id = 1;
  return (
    <div className="wrapper2">
      <div className="nav">
        <ul>
          <li>
            <Link to="info">info</Link>
          </li>
          <li>
            <Link to={`${id}/edit`}>edit</Link>
          </li>
          <li onClick={logOutHandler}>logout</li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserRoot;
