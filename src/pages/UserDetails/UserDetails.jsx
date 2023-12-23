import { useLoaderData, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function UserDetails() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    address: { address, city, state, postalCode },
    age,
    birthDate,
    bloodGroup,
    company: {
      address: {
        address: companyAddress,
        city: companyCity,
        postalCode: companyPost,
        state: companyState,
      },
      department,
      name: companyName,
      title,
    },
    email,
    phone,
    firstName,
    lastName,
    gender,
    image,
    university,
  } = data;
  return (
    <div className="userDetailsContainer">
      <div className="userDetailsWrapper">
        <button className="goBackBtn" onClick={() => navigate(-1)}>
          <IoMdCloseCircleOutline className="icon" />
        </button>
        <div className="userPic">
          <img src={image} alt={`${firstName} ${lastName}`} />
        </div>
        <div className="userDetails">
          <table className="personal">
            <tbody>
              <tr>
                <td colSpan="2">Personal Info:</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{`${firstName} ${lastName}`}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>DoB:</td>
                <td>{birthDate}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Blood Group:</td>
                <td>{bloodGroup}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>University:</td>
                <td>{university}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{`${address}, ${city}, ${state}, ${postalCode}`}</td>
              </tr>
            </tbody>
          </table>
          <table className="company">
            <tbody>
              <tr>
                <td colSpan="2">Company Info:</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{companyName}</td>
              </tr>
              <tr>
                <td>Department:</td>
                <td>{department}</td>
              </tr>
              <tr>
                <td>Title:</td>
                <td>{title}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{`${companyAddress}, ${companyCity}, ${companyState}, ${companyPost}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
