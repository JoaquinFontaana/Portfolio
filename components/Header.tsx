import Link from "next/link";
import styles from "./header.module.css";
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.itemsContainer}>
                <nav className={styles.navbar}>
                    <Link className={styles.link} href="">Home</Link>
                    <Link className={styles.link} href="">Projects</Link>
                    <Link className={styles.link} href="">About</Link>
                    <Link className={styles.link} href="">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
