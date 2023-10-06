import { app } from "../../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export async function signUp(email, password) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
