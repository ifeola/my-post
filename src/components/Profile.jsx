import { Link } from "react-router-dom";

const Profile = ({ className }) => {
  return (
    <Link
      to="/"
      className={`block border border-gray-700 rounded-full overflow-hidden ${className}`}>
      <img
        src="/assets/images/twitterLogo.png"
        alt=""
        className="w-full h-full object-cover "
      />
    </Link>
  );
};
export default Profile;
