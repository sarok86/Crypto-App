import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/sarok86">Sarok</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Sarok</p>
      </footer>
    </>
  );
}

export default Layout;
