import React from 'react'
import styles from './LogIn.module.css'

const LogIn = () => {
    return (
        <>
            <form action="/admin" method="POST">
                <div className={styles.form_padding}>
                    <h2>Ingresar</h2>
                    <p>Ingresa tu email y contraseña.</p>
                </div>
                <div className={styles.form_group}>
                    <input type="text" name="email" id="log-email" placeholder="Email" required="" autoFocus/>
                </div>
                <div className={styles.form_group}>
                    <input type="password" name="contraseña" id="log-password" placeholder="Contraseña" required=""/>
                </div>
                <div className={styles.form_group}>
                    <button className="form-btn">
                        Entrar
                    </button>
                </div>
                <div className={styles.form_group}>
                    <a href="/">¿Olvidó su contraseña?</a>
                </div>
                <div className={styles.form_group}>
                    <a href="/">¿Olvidó su email?</a>
                </div>    
            
            </form>
        </>
    )
}

export default LogIn
