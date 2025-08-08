
function UserProfile() {
  return (
    <div className="user-profile" bg-gray-100 md:p-8 sm:p-4 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:text-sm md:text-base sm:w-24 h-24 md:w-36 h-36 max-w-xs md:max-w-sm text-lg md:text-xl>
      <img src="https://via.placeholder.com/150" alt="User" rounded-full w-36 h-36 mx-auto/>
      <h1 text-xl text-blue-800 my-4>John Doe</h1>
      <p text-gray-600 text-base>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;