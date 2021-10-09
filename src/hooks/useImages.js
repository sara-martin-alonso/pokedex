import { useEffect, useState } from "react";

export default function useImages(props) {
  const { chosenPokemon } = props;
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (chosenPokemon.sprites) {
      const urls = Object.entries(chosenPokemon.sprites)
        .map((item, i) => {
          const imageFormat = /.png$/g;
          const imageSide = /^front/g;

          if (imageFormat.test(item[1]) && imageSide.test(item[0])) {
            return item[1];
          }
        })
        .filter(function (item) {
          return item !== undefined;
        });

      setImages(urls);
    }
  }, [chosenPokemon]);

  return images;
}
