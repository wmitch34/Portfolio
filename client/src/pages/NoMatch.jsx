import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoMatch() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return <div>Redirecting...</div>;
}
