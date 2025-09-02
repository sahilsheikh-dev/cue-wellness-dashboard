import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);

  return <div>Authorization in progress</div>;
}
