import { useNavigate } from 'react-router-dom';
import dc from '../../assets/dcLogo.png'
import marvel from '../../assets/marvelLogo.png'

export const InicioPage = () => {

  const navigate = useNavigate();

  const onMarvel = () =>{
    navigate('/marvel')
  }

  const onDc = () =>{
    navigate('/dc')
  }

  return (
    <>
      <h1 className="text-6xl text-center uppercase mt-8 font-bold animate__animated animate__rubberBand">
        ¿Qué <span className="text-yellow-500">team</span>eres 🤔?
      </h1>
      <div className="flex flex-col justify-center items-center mt-20">
        <img onClick={onMarvel} src={marvel} className='w-52 rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse' alt="" srcset="" />
        <img onClick={onDc} src={dc} className='w-52 rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse' alt="" srcset="" />
      </div>
    </>
  );
};
