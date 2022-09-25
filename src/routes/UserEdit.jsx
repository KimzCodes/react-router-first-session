import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserEdit = () => {
  const { userId } = useParams();

  return <div>UserEdit</div>;
};

export default UserEdit;
