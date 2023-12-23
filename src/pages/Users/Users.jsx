/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import User from "../../components/User/User";

export default function Users() {
  const data = useLoaderData();
  const { users } = data;

  return (
    <div className="userListWrapper">
      <div className="userList">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
