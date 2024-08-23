import { FaPlane } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
      <div className="relative flex items-center justify-center">
        {/* Airplane Icon */}
        <FaPlane className="absolute text-4xl text-gray-600 dark:text-gray-300" />

        {/* Loading Spinner */}
        <div className="w-16 h-16 border-4 border-solid border-primary border-t-transparent border-opacity-70 rounded-full animate-spin"></div>
      </div>

      {/* Loading Text */}
      <h1 className="text-xl md:text-3xl font-bold flex items-center ml-4">
        Please Wait <span className="ml-2">. . .</span>
      </h1>
    </div>
  );
};

export default Loader;
