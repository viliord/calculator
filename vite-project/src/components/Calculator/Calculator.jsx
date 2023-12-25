import styles from './styles.module.css'

export const Calculator = () => {

    return <header>
        <div>
            <input type="text" id={styles.displayBoard} />
        </div>

        <div className={styles.container}>

            <div className={styles.btnNumber}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => <button key={item}>{item}</button>)}
            </div>
            <div className={styles.btnsymbols}>
                {["+", "-", "*", "/", "="].map(item => <button key={item}>{item}</button>)}
            </div>
        </div>
    </header>
}