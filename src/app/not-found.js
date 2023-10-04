import Link from 'next/link'
import styles from "./styles/error.module.css"
// import "@/../bootstrap/dist/css/bootstrap.min.css"

const NotFound = () => {
  return (
    <>
      <section className={styles.error}>

        <div className={styles.box}>
          <h1>Error 404</h1>
          <h2>Not Found</h2>
          <p>Could not find the requested resources</p>

          <Link href="/">
            <button className={styles.btn}  >Go To Homepage</button>
          </Link>
        </div>

      </section>
    </>
  )
}

export default NotFound;