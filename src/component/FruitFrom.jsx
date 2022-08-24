import { useState } from "react";

export default function FruitForm({handleAdd}) {
    //state
    
  const [nouveauFruit, setNouveauFruit] = useState("");

    //comportement
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputRef.current.value);

        const id = new Date().getTime();
        const nom = nouveauFruit;
        const fruitAAjouter = { id, nom };
        // fruitsCopy.push(fruitAAjouter);
        handleAdd(fruitAAjouter)
        setNouveauFruit("");
      };
    
      const handleChange = (e) => {
        setNouveauFruit(e.target.value);
      };

    //affichage
    return (
        <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="ajouter un fruit..."
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>
)
}