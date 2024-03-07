import styles from "./form.module.css";
export default function Form() {
  return (
    <form className={styles.contactForm}>
      <h3>Contact me</h3>
      <input placeholder="Name"></input>
      <input placeholder="Email"></input>
      <textarea placeholder="message..."></textarea>
      <button>Send</button>
    </form>
  );
}
