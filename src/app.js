import { useState } from "react";
import Fruit from "./component/Fruit";
import FruitForm from "./component/FruitFrom";

function App() {
  //state(état)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // const inputRef = useRef();

  //comportement
  const handleDelete = (id) => {
    console.log(id);

    //1.copie du state
    const fruitsCopy = [...fruits];

    //2.manipuler le
    const fruitCopyUpdating = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3.modifier le state
    setFruits(fruitCopyUpdating);
  };

  const handleAdd = (fruitAAjouter) => {
    //1 copier
    const fruitsCopy = [...fruits];

    //2 manipulation sur la copie
    fruitsCopy.push(fruitAAjouter);

    //3 modifier avec le seteur
    setFruits(fruitsCopy);
  };

  const afficherFruitPrefere = (fruitNom) => {
    alert(` J'aime trop ce fruit ${fruitNom} `);
  };

  //affichage(render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfos={fruit}
            onClick={() => afficherFruitPrefere(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;

//gestion du formulaire

// 1 création du formulaire

// 2 soumission du formulaire ( onSubmit / handleSubmit )

// 3 collecte des données du formulaire

//methode useRef  / methode ascendante descante (onChange / handleChange )
