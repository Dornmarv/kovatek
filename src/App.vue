<template>
  <div id="app">
    <a-layout id="components-layout-demo-responsive" :style="{ background: '#fff' }" theme="light">
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
        :style="{ background: '#FAFAFA' }"
        theme="light"
      >
        <div class="logo" />

        <div>
          <p class="name mt-4">
            <img src="./assets/images/jb.svg" class="responsive-img" alt width="20%" />
            &nbsp; JB Finance
            <img
              src="./assets/images/arrow-down.svg"
              class="responsive-img ml-3"
              alt
              width="3%"
            />
          </p>
        </div>

        <a-divider />
        <a-menu mode="inline" :default-selected-keys="['8']">
          <router-link to="/board">
            <a-menu-item key="1" class="sidenav-list pb-2 text-left">
              <img
                src="./assets/images/board.svg"
                class="responsive-img"
                width="14%"
                alt
                style="margin-right: 10px"
              />

              <span class="nav-text">Board</span>
            </a-menu-item>
          </router-link>
          <router-link to="/performance">
            <a-menu-item key="2" class="sidenav-list pb-2">
              <img
                src="./assets/images/performance.svg"
                class="responsive-img"
                width="14%"
                alt
                style="margin-right: 10px"
              />
              <span class="nav-text">Performance</span>
            </a-menu-item>
          </router-link>
          <router-link to="/milestone">
            <a-menu-item key="3" class="sidenav-list pb-2 text-left">
              <img
                src="./assets/images/milestone.svg"
                class="responsive-img"
                width="14%"
                alt
                style="margin-right: 10px"
              />
              <span class="nav-text">Milestone</span>
            </a-menu-item>
          </router-link>
          <router-link to="/notifications">
            <a-menu-item key="4" class="sidenav-list pb-2 text-left">
              <img
                src="./assets/images/notifications.svg"
                class="responsive-img"
                width="14%"
                alt
                style="margin-right: 10px"
              />
              <span class="nav-text">Notifications</span>
            </a-menu-item>
          </router-link>
          <a-divider />
          <router-link to="/components">
            <a-menu-item key="5" class="sidenav-list pb-2">
              <img
                src="./assets/images/components.svg"
                class="responsive-img"
                width="14%"
                alt
                style="margin-right: 10px"
              />
              <span class="nav-text">Components</span>
            </a-menu-item>
          </router-link>
          <router-link to="/members">
            <a-menu-item key="6" class="sidenav-list pb-2">
              <img
                src="./assets/images/members.svg"
                class="responsive-img"
                width="14%"
                alt
                style="margin-right: 10px"
              />
              <span class="nav-text">Members</span>
            </a-menu-item>
          </router-link>
          <router-link to="/help">
            <a-menu-item key="7" class="sidenav-list pb-2">
              <img
                src="./assets/images/help.svg"
                class="responsive-img"
                width="14%"
                alt
                style="margin-right: 10px"
              />
              <span class="nav-text">Help</span>
            </a-menu-item>
          </router-link>
          <router-link to="/project-settings">
            <a-menu-item key="8" class="sidenav-list pb-2 text-left">
              <img
                src="./assets/images/settings.svg"
                class="responsive-img"
                width="14%"
                alt
                style="margin-right: 10px"
              />
              <span class="nav-text">Project Settings</span>
            </a-menu-item>
          </router-link>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header id="header" :style="{ background: '#fff', padding: 0 }">
          <a class="navbar-brand" href="#">
            <img src="./assets/images/logo.svg" class="responsive-img" alt />
          </a>
          <a style="float: right;" class="d-none d-lg-block">
            <a class="nav-head-text" href="#">Dev Profile</a>
            <a class="nav-head-text" href="#">
              <img src="./assets/images/alarm.svg" class="responsive-img" width="7%" alt />
            </a>
            <a class="nav-head-text" href="#">
              <img src="./assets/images/user.svg" class="responsive-img" width="7%" alt />
              &nbsp; Adetunji
            </a>
          </a>
        </a-layout-header>
        <a-layout-content :style="{ margin: '0px' }">
          <div :style="{ padding: '24px', background: '#fff' }">
            <router-view></router-view>
          </div>
        </a-layout-content>

        <a-layout-footer style="textAlign: left; background: white;">
          <a-divider />Copyright Kovatek 2019, All Rights Reserved
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
};
</script>

<style>
@font-face {
  font-family: "BwAletaNo10";
  src: url("~@/assets/fonts/BwAletaNo20-Regular.otf") format("opentype"),
    url("~@/assets/fonts/BwAletaNo10-Black.otf") format("opentype"),
    url("~@/assets/fonts/BwAletaNo10-BlackItalic.otf") format("opentype"),
    url("~@/assets/fonts/BwAletaNo10-Bold.otf") format("opentype"),
    url("~@/assets/fonts/BwAletaNo10-BoldItalic.otf") format("opentype"),
    url("~@/assets/fonts/BwAletaNo10-RegularItalic.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: "BwAletaNo10", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@media only screen and (min-width: 600px) {
  .navbar-brand {
    float: left;
  }
}

#components-layout-demo-responsive .logo {
  height: 64px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}

#components-layout-demo-responsive {
  min-height: 100vh;
  background: white !important;
}

.nav-text {
  font-weight: bold;
  margin-left: 5px;
  color: #979a9d;
}
.name {
  font-weight: bold;
  font-size: 17px;
  color: #1c4798;
}
.nav-head-text {
  font-weight: bold;
  color: #1c4798;
  margin-right: 22px;
}

.ant-menu {
  background: none !important;
}
.ant-menu-inline .ant-menu-selected::after,
.ant-menu-inline .ant-menu-item-selected::after {
  opacity: 0 !important;
}
.sidenav-list {
  text-align: left;
  padding-left: 28px !important;
  margin-bottom: 12px !important;
  padding-top: 13px;
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #e9edf5;
  color: #1c4798;
}

#header {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 1;
}
a.router-link-exact-active.router-link-active li.sidenav-list {
  background-color: #e9edf5;
  color: #1c4798 !important;
}

a.router-link-exact-active.router-link-active li.sidenav-list span.nav-text {
  color: #1c4798 !important;
}
</style>
