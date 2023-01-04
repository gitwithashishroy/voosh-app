import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import NavBar from "./NavBar";
import styles from "../styles/register.module.css";
import {
  setItemInLocalStorage,
  getItemFromLocalStorage,
  LOCALSTORAGE_KEY,
} from "../utils/index";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);

  useEffect(() => {
    const data = getItemFromLocalStorage(LOCALSTORAGE_KEY);
    const user_data = JSON.parse(data);
    setUser(user_data);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setRegistering(true);

    if (user && user.email === email) {
      toast("email is already registered with us");
      setRegistering(false);
      return;
    }

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    setItemInLocalStorage(LOCALSTORAGE_KEY, userData);
    setUser(userData);
    console.log(userData);
    setRegistering(false);
    toast("you have been successfully registered with us !");
  };

  if (user) {
    <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.registerHomeButton}>
        <Link to="/" className={styles.registerButtonText}> Home </Link>
      </div>
      <div className={styles.registerContainer}>
        {user && (
          <div className={styles.title}>
            Hey {user.name} . Thank you for registering with us.
          </div>
        )}

        {!user && (
          <div className={styles.title}> Register to Book A Demo Now</div>
        )}

        <form className={styles.registerForm} onSubmit={handleFormSubmit}>
          <span className={styles.registerHeader}> Register </span>
          <div className={styles.field}>
            <div className={styles.label}>
              Name <span>*</span>{" "}
            </div>
            <input
              placeholder="Ex. Robin Hood"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <div className={styles.field}>
            <div className={styles.label}>
              Email <span>*</span>{" "}
            </div>
            <input
              placeholder="Ex. abc@website.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div className={styles.field}>
            <div className={styles.label}>
              Password <span>*</span>{" "}
            </div>
            <input
              placeholder="Ex. axyz1234"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <button disabled={registering}>
              {registering ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
