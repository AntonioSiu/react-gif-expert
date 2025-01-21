//custom hook
//si rgreso algo de html a insyectar en el DOM, entonces el fichero es jsx
//un hook no es más que una función que regresa algo
//un hook regresa normalmente un array '[]' o un objeto con eleementos '{}'

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading]=useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, []);


  return (
    {
        images:images,        // esto también se puede escribir 'images,' ya que images apunta a una variable con el mismo nombre
        isLoading: isLoading, 
    }
  )
}
