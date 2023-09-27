import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className=" max-w-5xl mx-auto mt-24 text-center space-y-6"
    >
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className=" font-semibold">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="mt-6">
        <button className="bg-[#FF444A] py-3 px-5 text-white font-bold">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
