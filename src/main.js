import Vue from "vue";
import VueRouter from "vue-router";
import Antd from "ant-design-vue";
import Board from "./components/pages/Board";
import Milestone from "./components/pages/Milestone";
import Members from "./components/pages/Members";
import Notification from "./components/pages/Notification";
import Settings from "./components/pages/Settings";
import Components from "./components/pages/Components";
import CreateComponent from "./components/pages/CreateComponent";
import MilestoneNewissue from "./components/pages/MilestoneNewissue";
import EditMilestone from "./components/pages/EditMilestone";
import Performance from "./components/pages/Performance";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Antd);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/board", component: Board, props: true },
    { path: "/milestone", component: Milestone, props: true },
    { path: "/members", component: Members, props: true },
    { path: "/notifications", component: Notification, props: true },
    { path: "/project-settings", component: Settings, props: true },
    { path: "/components", component: Components, props: true },
    {
      path: "/components/create-component",
      component: CreateComponent,
      props: true
    },
    { path: "/milestone/new-issue", component: MilestoneNewissue, props: true },
    {
      path: "/milestone/edit-milestone",
      component: EditMilestone,
      props: true
    },
    { path: "/performance", component: Performance, props: true }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
