import UserContext from "./UserContext";

function UserDetails({ userData }) {
  return (
    <div>
      <p>Name: {UserContext.name}</p>
      <p>Email: {UserContext.email}</p>
    </div>
  );
}

export default UserDetails;