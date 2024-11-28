const Error = () => {
  return (
    <div className="mt-40 h-full w-full flex items-center justify-center flex-col">
      <div className="text-8xl block overflow-hidden">
        <span className="object-contain">🤦‍♂️</span>
      </div>
      <h1 className="my-4 text-2xl">Oops, Unable to load Posts.</h1>
      <p className="text-gray-400">Please, Try reloading page...</p>
    </div>
  );
};
export default Error;
