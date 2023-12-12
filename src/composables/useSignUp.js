import { ref } from "vue";
import { firebaseAuth } from "@/configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, displayName) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    if (!response) {
      throw new Error("Can not create new user");
    }
    await updateProfile(response.user, { displayName });
    return response;
  } catch (e) {
    if (e.code === "auth/email-already-in-use") {
      error.value = "Email already in use";
    } else {
      error.value = e.message;
    }
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}
