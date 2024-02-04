import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 flex-col items-center justify-center py-10">
            <Outlet />
          </section>

          <img
            className="hidden h-screen w-1/2 bg-no-repeat object-cover xl:block"
            src="../assets/images/side-img.svg"
            alt="side-img"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
