export default function Fruit({fruitInfos, onClick}){
    //state
    // const fruitInfos =  props.fruitInfos;
    // const onFruitDelete = props.onFruitDelete;

    //comportement

    //affichage (render)
    return  (
    <li>
        {fruitInfos.nom} <button onClick={onClick}>x</button>
    </li>
  );
}