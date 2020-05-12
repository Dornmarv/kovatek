<template>
  <div>
    <Breadcrumb page="Project Settings" />
    <div class="row">
      <div class="col-lg-10">
        <div class="box">
          <Settingslayout page="Settings" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../layouts/Breadcrumb";
import Settingslayout from "../layouts/Settingslayout";

export default {
  name: "Board",
  components: {
    Breadcrumb,
    Settingslayout
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
