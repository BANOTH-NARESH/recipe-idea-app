import styles from'./search.module.css';
export default function Inner({children}){
    return<div className={styles.innercontainer}>{children}</div>
}