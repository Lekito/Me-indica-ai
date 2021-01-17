import React from 'react';
import Link from 'next/link'
import styles from './CadastroNovaSenha.module.css'

export default function CadastroNovaSenha() {
    return(
        <div className={styles.caixa}>
            <div className={styles.formsenha}>
                <h1>Cadastro nova Senha</h1>
                <form>
                    <input type="text" placeholder="Email ou telefone" className="login"></input>
                    <input type="date" placeholder=" nascimento" className="dataNasc"></input>
                    <Link href="/">
                        <button className="" >Enviar</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}