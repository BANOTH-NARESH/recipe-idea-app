import styles from'./search.module.css';
export default function Container({children}){
    return(
        <div className={styles.parent}>{children}</div>
    )
}