import { useEffect, useState } from "react";
import styles from './search.module.css'
const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY="81ee3792637b48dfa2141c009ba87b7c";
export default function Search({foodData,setfoodData}){
    const[query,setquery]=useState("pizza");
    useEffect(() =>{
    async function fetchfood(){
        const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data= await res.json()
        console.log(data.results)
        setfoodData(data.results)
        }
        fetchfood()
    },[query])
    return(
        <div className={styles.Searchcontainer}>
            <input className={styles.input}value={query}type="text"  onChange={(e)=>setquery(e.target.value)}/>
        </div>

    );
}