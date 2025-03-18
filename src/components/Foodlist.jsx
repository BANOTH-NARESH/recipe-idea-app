import Fooditem from "./Fooditem";

export default function Foodlist({ foodData, setid }) {
    if (!Array.isArray(foodData)) {
        console.error("Invalid food data:", foodData);
        return <div>Error: Unable to load food items.</div>; 
    }

    return (
        <div>
            {foodData.length > 0 ? (
                foodData.map((food) => (
                    <Fooditem setid={setid} key={food.id} food={food} />
                ))
            ) : (
                <div>Fetching food data...</div>
            )}
        </div>
    );
}
