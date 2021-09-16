import React from "react";
import styles from "./CardHorizontal.module.css";
import Cacerola from "./img/Cacerola.jpg";
import SartenAqua from "./img/SartenAqua.jpg";

const CardHorizontal = () => {
    return (
        <div>
            <div className={styles.card}>
                <img src={Cacerola} alt="" className={styles.card__img}></img>
                <div className={styles.card__content}>
                    <a href="#">
                        <h6>Cacerola Clasica Marsala</h6>
                    </a>
                    <p>
                        Diametro: 24cm
                    </p>
                    <p>
                        Capacidad: 4.5 litros
                    </p>
                    <p>
                        Comensales: 4
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={SartenAqua} alt="" className={styles.card__img}></img>
                <div className={styles.card__content}>
                    <a href="#">
                        <h6>Sartén Aqua</h6>
                    </a>
                    <p>
                        Diametro: 24cm
                    </p>
                    <p>
                        Capacidad: 2.8 litros
                    </p>
                    <p>
                        Comensales: 4
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardHorizontal;