import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();
  const logIn = () => {
    navigate("/inicio", {
      // replace: true,
    });
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <button onClick={logIn} className="bg-orange-600 py-2 px-4 rounded font-bold animate__animated animate__infinite animate__pulse">
        Ingresar 😎
      </button>
    </div>
  );
};
