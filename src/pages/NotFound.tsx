import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
          <p className="mb-4 text-xl text-white/70">Oops! Page not found</p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
