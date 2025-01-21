import { useState } from "react";


export const AddCategoryDef = ({ onNewCategory }) => {//estoy recibiendo de GiftExpertApp6 la función que corre en ese componente para pasarle el parámetro newCategory desde este componente


    const [inputValue, setInputValue] = useState();

    const handleInputChange = ({ target }) => {
        //console.log(inputValue);
        setInputValue(target.value);
    }

    const onSubmitear = (event) => {
        event.preventDefault();
        //console.log(inputValue.trim().length);

        if (inputValue.trim().length <= 1) return;

        //setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());//=función de GifExpertApp6 'onNewCategory'
        setInputValue('');
    }


    return (
        <form onSubmit={onSubmitear}>
            <input
                type="text"
                name="categoria"
                placeholder="Añadir GIFs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


