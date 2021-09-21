import React from 'react'
import Button from '../../components/button/Button';
import CardVertical from '../../components/card_vertical/CardVertical';
import styles from './Admin.module.css';

const admin = () => {

    const handleClick = () => {
        console.log("clickeado")
    }

    return (
        <div className={styles.admin_panel}>
            <h2>Panel de Administración</h2>
            <h3>Lista de Recetas</h3>
            <Button handleClick={handleClick} btnName="Agregar"/>
            <h4>Aquí se carga una lista de recetas</h4>
            <CardVertical/>
        </div>
    )
}

export default admin
