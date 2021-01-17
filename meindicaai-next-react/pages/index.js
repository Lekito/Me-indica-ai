import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me indica Aí!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.box}>
        <div className={styles.logo}>
        </div>
        <br/><br/>
        <div className={styles.formularios}>
          <form>
            <input type="text" placeholder="Email ou telefone" className={styles.login}></input>
            <input type="password" placeholder="Senha" className={styles.login}></input>
            <button className={styles.entrar}>Entrar</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}
