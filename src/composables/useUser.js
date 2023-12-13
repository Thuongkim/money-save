import { ref } from "vue";
import { firebaseAuth } from "@/configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(firebaseAuth.currentUser);
onAuthStateChanged(firebaseAuth, (currentUser) => {
  if (currentUser) {
    user.value = currentUser;
  }
});

function getUser() {
  return { user };
}

export function useUser() {
  return { getUser };
}
