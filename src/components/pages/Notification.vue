<template>
  <div>
    <Breadcrumb page="Notification" />
    <div class="row">
      <div class="col-lg-10">
        <div class="box">
          <Notifications page="Notification" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../layouts/Breadcrumb";
import Notifications from "../layouts/Notifications";

export default {
  name: "Board",
  components: {
    Breadcrumb,
    Notifications
  }
};
</script>

<style scoped>
.box {
  background: rgba(239, 239, 239, 0.45);
  border: 1px solid rgba(112, 112, 112, 0.45);
  border-radius: 13px;
  padding: 30px;
  min-height: 100vh;
}
</style>
