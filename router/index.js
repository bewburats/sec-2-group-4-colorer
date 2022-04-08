import { createRouter, createWebHistory } from "vue-router";
import GenColor from "../src/views/GenColor.vue";
import ExploreColor from "../src/views/ExploreColor.vue";
import GameColor from "../src/views/GameColor.vue";
import Home from "../src/views/Home.vue"

const history = createWebHistory();
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },{
    path: "/generatecolor",
    name: "GenerateColor",
    component: GenColor,
  },{
    path: "/explorecolor",
    name: "ExploreColor",
    component: ExploreColor,
  },{
    path: "/gamecolor",
    name: "GameColor",
    component: GameColor,
  }
//   ,
//   {
//     path: "/:notMatchPath(.*)",
//     name: "NotFound",
//     component: NotFound,
//   }

];
const router = createRouter({ history, routes });
export default router;