import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
    },
    {
      path: "/world",
      name: "helloWorld",
      component: () => import("../components/HelloWorld.vue")
    },
    {
      path: "/kitty",
      name: "helloKitty",
      component: () => import("../components/HelloKitty.vue")
    },
    {
      path: "/react",
      name: "react",
      component: () => import("../components/ReactiveApi.vue")
    }
  ]
});

export default router;
