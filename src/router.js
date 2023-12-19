import { createRouter, createWebHistory } from "vue-router";
import Transactions from "./pages/transactions.vue";
import TransactionDetails from "./pages/transaction_details.vue";
import TransactionEdits from "./pages/transaction_edits.vue";
import TransactionAdds from "./pages/transaction_adds.vue";
import NotFound from "./pages/not_found.vue";
import { firebaseAuth } from "./configs/firebase";

const requireAuth = (to, from, next) => {
  const user = firebaseAuth.currentUser;
  if (user) {
    next();
  } else {
    next({ name: "login" });
  }
};

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./pages/home.vue"),
    name: "home",
  },
  {
    path: "/register",
    component: () =>
      import(/* webpackChunkName: "register" */ "./pages/register.vue"),
    name: "register",
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "./pages/login.vue"),
    name: "login",
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "./pages/profile.vue"),
    name: "profile",
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "./pages/logout.vue"),
    name: "logout",
  },
  {
    path: "/transactions",
    component: Transactions,
    meta: {
      layout: "auth",
    },
    name: "transactions",
  },
  {
    path: "/transactions/:id",
    component: TransactionDetails,
    name: "transaction_details",
  },
  {
    path: "/transactions/edit/:id",
    component: TransactionEdits,
    name: "transaction_edits",
  },
  {
    path: "/transactions/add",
    component: TransactionAdds,
    name: "transaction_adds",
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
