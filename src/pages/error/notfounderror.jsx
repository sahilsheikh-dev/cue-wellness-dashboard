// src/pages/NotFound/NotFound.jsx
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundError() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
            <h1 className="text-9xl font-bold text-indigo-600">404</h1>
            <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
            <p className="text-lg text-gray-600 mt-2 mb-6">
                Oops! The page you are looking for does not exist.
            </p>
            <Button
                onClick={() => navigate("/")}
                className="px-6 py-3 text-base"
            >
                Go to Home
            </Button>
        </div>
    );
}
