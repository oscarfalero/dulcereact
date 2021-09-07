import React from "react";
import styles from "./CardVertical.module.css";

const CardVertical = () => {
    return (

            <div className={styles.cards}>
                <div className={styles.cards__item}>
                    <div className={styles.card}>
                        <div className={styles.card__image}></div>
                        <div className={styles.card__content}>
                            <div className={styles.card__title}><h4>Peceto con croute de queso y hierbas</h4></div>
                            <p className={styles.card__text}>Tiempo: 50min | Porciones: 10</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards__item}>
                    <div className={styles.card}>
                        <div className={styles.card__image}></div>
                        <div className={styles.card__content}>
                            <div className={styles.card__title}><h4>Solomillo de cerdo con papas noissette</h4></div>
                            <p className={styles.card__text}>Tiempo: 20min | Porciones: 4</p>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

export default CardVertical;