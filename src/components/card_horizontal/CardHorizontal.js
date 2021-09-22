import React from "react";
import styles from "./CardHorizontal.module.css";
import PropTypes from 'prop-types';

const CardHorizontal = ({name, size, capacity, line, imgUrl}) => {
    return (
            <div className={styles.card}>
                <img src={imgUrl} alt="" className={styles.card__img}></img>
                <div className={styles.card__content}>
                    <a href="/">
                        <h6>{name}</h6>
                    </a>
                    <p>
                        Diametro: {size}cm
                    </p>
                    <p>
                        Capacidad: {capacity} ltrs
                    </p>
                    <p>
                        Linea: {line}
                    </p>
                </div>
            </div>
    );
};

CardHorizontal.propTypes = {
    name: PropTypes.string.isRequired
}

export default CardHorizontal;