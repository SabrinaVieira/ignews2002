import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useSession, signIn, signOut  } from 'next-auth/react';

export function SignInButton() {
//   const [isLogged, setLogged] = useState(true);
const { data: session } = useSession();
console.log({session})

  return session ? (
    <button type="button" className={styles.signInButton} onClick={()=> signOut()}>
      <FaGithub color="#84d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={()=> signIn('github')}>
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  );
}
