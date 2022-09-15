import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { heroesApi } from "../../api/HeroesApi";

export const HereoPage = () => {
  const { id } = useParams();
  console.log(id);

  const [getOne, setGetOne] = useState([]);

  useEffect(() => {
    obtenerHeroe();
  }, []);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }

  const obtenerHeroe = async () => {
    try {
      const resp = await heroesApi.get(`/superheroes/${id}`);
      setGetOne(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log("🔴🔴 Paso algo inesperado 🔴🔴", error);
    }
  };

  return (
    <div className="grid sm:grid-cols-1 gap-3 animate__animated animate__fadeInLeftBig">
      <div
        className="w-1/1 sm:w-1/2 grid sm:grid-cols-2 rounded-2xl bg-gray-900 m-8"
        key={getOne.id}
      >
        {/* <h3 className="font-bold text-center"> {getOne.nombre} </h3> */}
        <img
          className="w-full rounded-t-2xl"
          src={getOne.imagen}
          alt={getOne.nombre}
        />
        <div className="p-6">
          <div className="text-xl mb-2">
            <span className="font-bold text-yellow-500">Nombre:</span>{" "}
            {getOne.nombre}
          </div>
          <div className="text-xl mb-2">
            <span className="font-bold text-yellow-500">Editorial:</span>{" "}
            {getOne.editorial}
          </div>
          <div className="text-xl mb-2">
            <span className="font-bold text-yellow-500">Estreno:</span>{" "}
            {getOne.estreno}
          </div>
          <div className="text-xl mb-2">
            <span className="font-bold text-yellow-500">Descripcion:</span>{" "}
            <p className="text-gray-400 text-base text-justify my-4">
              {getOne.descripcion}
            </p>
          </div>
          <div className="text-xl mb-2">
            <span className="font-bold text-yellow-500">Poderes:</span>{" "}
            {getOne.poderes}
          </div>

          <button onClick={onNavigateBack} className="w-full bg-orange-400 p-2 mt-3 rounded font-bold hover:bg-orange-600 animate__animated animate__infinite animate__tada">
          👈🏾 Regresar 👈🏾
          </button>
        </div>
      </div>
    </div>
  );
};
