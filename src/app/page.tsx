import Image from "next/image";
import styles from "./page.module.css";
import Form from "../../components/Form";
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.me}>
        <h1 className={styles.title}>Joaquín Fontana</h1>
        <h2 className={styles.subtitle}>Full stack developer</h2>
        <div className={styles.redes}>
          <a><FaLinkedinIn /></a>
          <a><FaGithub /></a>
        </div>
        <button>Download CV</button>
      </div>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.proyectsContainer}>

        </div>
      </section>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <section className={styles.aboutSections}>
        <div>
          <h3>Education</h3>
        </div>
        <div>
          <h3>What i am expect</h3>
        </div>
        </section>
      <Form/>
    </main>
  );
}
