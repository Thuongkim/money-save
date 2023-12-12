import { ref } from "vue";
import { firebaseAuth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    if (!response) {
      throw new Error("Wrong email or password");
    }
    return response;
  } catch (e) {
    if (e.code === "auth/invalid-credential") {
      error.value = "Wrong email or password";
    } else {
      error.value = e.message;
    }
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signIn };
}
