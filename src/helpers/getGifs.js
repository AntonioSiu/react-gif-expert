

export const getGifs = async (cat) => {

    const limit = 20;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Qb9C3FgwqAwuZD8Aylto5AN2t2ip6DT4&q=${cat}&limit=${limit}`;//api_key from antoniosiu@gmail.com, username: calandraquas
    
    const resp = await fetch(url);
    const { data } = await resp.json();//'data' es un arreglo
  
    const gifs = data.map(cadaDato => ({  //data.map genera un nuevo array aplicando una función a cada elemento del array original (='data').
      id: cadaDato.id,
      title: cadaDato.title,
      url: cadaDato.images.downsized_medium.url,
      rating: cadaDato.rating,
      analytics: cadaDato.analytics.onclick.url,
    })
    );
    console.log(gifs);
    return gifs;
  }