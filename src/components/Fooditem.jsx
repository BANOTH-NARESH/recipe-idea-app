import styles from "./search.module.css";

export default function Fooditem({ food, setid }) {
    return (
        <div className={styles.item}>
            <img className={styles.img} src={food.image} alt={food.title || "Food image"} />
            
            <div className={styles.containeritem}>
                <p className={styles.content}>{food.title}</p>
            </div>
            
            <div className={styles.containerbutton}>
                <button 
                    onClick={() => {
                        console.log("Selected food ID:", food.id);
                        if (typeof setid === "function") {
                            setid(food.id);
                        } else {
                            console.error("setid is not a function");
                        }
                    }} 
                    className={styles.button}
                >
                    View Recipe
                </button>
            </div>
        </div>
    );
}
