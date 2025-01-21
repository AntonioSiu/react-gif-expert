
import { useState, useEffect } from "react";
import { GifItemDef } from "./GifItemDef";
import { useFetchGifs } from "../hooks/useFetchGifs";




export const GifGridDef = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category); //en vez de unn arreglo regresa un objeto poruqe es lo que nos interesa ne este custom hook'{}'
  // hago todo lo dee abajo en un custom hook 'useFetchGifs'

  console.log({ isLoading });

  // const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading]=useState(true);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  //   setIsLoading(false);
  // }

  // useEffect(() => {
  //   getImages();
  // }, []);


  return (
    <>
      <h3>{category}</h3>
      {
        // isLoading ? (<h2>Cargando...</h2>) : null //ternario
        isLoading && (<h2>Cargando...</h2>) // and lógico //las dos expresiones generann la etiqueta h2 si isLoading===true
      }


      <div className="card-grid">
        {
          // images.map(img => (
          //     <li key={img.id}>{img.title}</li>
          //   )) // esta es una opción, pero mejor desestrunturándolo directamente

          images.map((imagen) => (
            <GifItemDef
              key={imagen.id}
              {...imagen} />//spread (esparcir) todas las propiedades que vengan en el 'imagen'. Así las capturo en el componente directamente con su nombre
          )) // esta es la opción con desestructuración del array. hay que poner paréntesis en 

        }

      </div>
    </>
  )
}
