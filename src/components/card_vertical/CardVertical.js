import React from "react";
import styles from "./CardVertical.module.css";
import PropTypes from 'prop-types';

const CardVertical = ({title, time, portions}) => {
    return (

            <div className={styles.cards}>
                <div className={styles.cards__item}>
                    <div className={styles.card}>
                        <div className={styles.card__image}></div>
                        <div className={styles.card__content}>
                            <div className={styles.card__title}><h4>{title}</h4></div>
                            <p className={styles.card__text}>Tiempo: {time} min | Porciones: {portions}</p>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

CardVertical.propTypes = {
    title: PropTypes.string.isRequired
}



export default CardVertical;