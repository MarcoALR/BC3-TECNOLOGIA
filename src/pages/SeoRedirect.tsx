import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SeoRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);
  return null;
};

export default SeoRedirect;
