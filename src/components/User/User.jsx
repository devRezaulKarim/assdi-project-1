import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function User({ user }) {
  const {
    firstName,
    lastName,
    email,
    image,
    phone,
    id,
    company: { name, department },
  } = user;
  return (
    <div className="singleUser">
      <img src={image} alt={`${firstName} ${lastName}`} />
      <div className="userInfo">
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{`${firstName} ${lastName}`}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td>Company::</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Department:</td>
              <td> {department}</td>
            </tr>
          </tbody>
        </table>
        <Link to={`/users/${id}`} className="detailsBtn">
          Details
        </Link>
      </div>
    </div>
  );
}
