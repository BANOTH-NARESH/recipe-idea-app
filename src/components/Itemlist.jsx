import styles from "./search.module.css";
export default  function Itemlist({ food }){
    return <div>
        {food.extendedIngredients.map((item) =>(
        <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
        <img  className={styles.images} src={`https://spoonacular.com/cdn/ingredients_100×100/` +item.image} alt={item.image}/>
        </div>
        <div className={styles.nameContainer}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.amount}>{item.amount} {item.unit}</div>
        </div>
        </div>
    ))}
    </div>
}