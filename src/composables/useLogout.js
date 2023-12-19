import { ref } from "vue";
import { firebaseAuth } from "@/configs/firebase";
import { signOut } from "firebase/auth";

const error = ref(null);
async function logout() {
  error.value = null;
  try {
    const response = await signOut(firebaseAuth);
    return response;
  } catch (e) {
    error.value = e.code;
  }
}

export function useLogout() {
  return { error, logout };
}
