import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { heroesApi } from "../../api/HeroesApi";

export const DcPage = () => {
  const [getHeroes, setGetHeroes] = useState([]);

  useEffect(() => {
    obtenerHeroesDc();
  }, []);

  const obtenerHeroesDc = async () => {
    try {
      const resp = await heroesApi.get("/superheroes?tipo=heroes-dc");
      setGetHeroes(resp.data);
      console.log(getHeroes);
    } catch (error) {
      console.log("🔴🔴 Paso algo inesperado 🔴🔴", error);
    }
  };

  return (
    <>
      <div className="bg-zinc-500">
        <h1 className="uppercase font-bold text-center text-6xl pb-5 pt-2">
          <span className="text-yellow-500">Top 20</span>
          <br /> Mejores heroes de
          <span className="text-yellow-500"> DC</span>
        </h1>
        <div className="grid sm:grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {getHeroes.map((heroe) => (
            <div
              className="px-5 rounded-t-2xl shadow-2xl bg-gray-900 m-8"
              key={heroe.id}
            >
              {/* <h3 className="font-bold text-center"> {heroe.nombre} </h3> */}
              <img
                className="w-full rounded-t-2xl"
                src={heroe.imagen}
                alt={heroe.nombre}
              />
              <div className="p-6">
                <div className="font-bold text-xl mb-2">{heroe.nombre}</div>
                <p className="text-gray-500 text-base text-justify">
                  {heroe.descripcion.substring(0, 200).concat("...")}
                </p>
                <Link to={`/heroe/${heroe.id}`}>
                  <button className="w-full bg-orange-400 p-2 mt-3 rounded font-bold hover:bg-orange-600">
                    Ver perfil
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
