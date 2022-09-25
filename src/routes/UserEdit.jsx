import { useParams } from "react-router-dom";

const UserEdit = () => {
  const { id } = useParams();

  return <div>UserEdit: {id}</div>;
};

export default UserEdit;
