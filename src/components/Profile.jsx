const Profile = ({ className }) => {
  return (
    <div
      className={`block border border-gray-700 rounded-full overflow-hidden ${className}`}>
      <img
        src="/assets/images/twitterLogo.png"
        alt=""
        className="w-full h-full object-cover "
      />
    </div>
  );
};
export default Profile;
