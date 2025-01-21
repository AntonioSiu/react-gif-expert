
//import React from 'react' //-> no es necesario importar react aquí. ya está importado en vite.config.js- ya se sabe que estamos trabajando con react
import { useState } from "react"
import { AddCategoryDef, GifGridDef } from "./components";// igual a "./components/index"; porque a index va a apuntar por defecto

export const GifExpertAppDef = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        const categoriesLowerCase = categories.map(texto => texto.toLowerCase());

        if (categoriesLowerCase.includes(newCategory.toLowerCase())) return;
        console.log(newCategory);
        //setCategories([newCategory,...categories]);//insertando al principio
        setCategories((categ) => [newCategory, ...categ]);

    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertAppDef</h1>

            {/* Input */}
            <AddCategoryDef
                // setCategories={setCategories}
                onNewCategory={(argumento) => onAddCategory(argumento)}//onNewCategory es una propiedad de mi componente '<AddCategory3/>'. El valor de esta propiedad es el que devuelve la función callback 'onAddCategory' a la que llama

            />


            {/* Listado de Gifts */}


            {
                categories.map((category) => (
                    <GifGridDef
                        key={category}
                        category={category} />
                ))
            }
            {/* es el mismo objeto el que devuelve en cada caso */}


            {/* Gift Item */}


        </>
    )
}





