<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="../../assets/images/logo.svg" class="responsive-img" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item ">
              <a class="nav-link" href="#">Browse </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My Projects</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Saved</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Messages</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Dev Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img
                  src="../../assets/images/user.svg"
                  class="responsive-img"
                  width="77%"
                  alt=""
                />
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <img
                  src="../../assets/images/alarm.svg"
                  class="responsive-img"
                  width="25%"
                  alt=""
                />
                Adetunji</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin: 0 10px;
}
a.nav-link {
  color: #1c4798 !important;
  font-weight: 500;
}

nav.navbar {
  background: white !important;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
</style>
