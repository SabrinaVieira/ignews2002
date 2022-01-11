import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const [isLogged, setLogged] = useState(true);

  return isLogged ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#84d361" />
      Sabrina Vieira
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  );
}
