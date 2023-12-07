import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default"))
  );
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth"))
  );
}
