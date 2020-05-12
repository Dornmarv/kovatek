<template>
  <div>
    <Breadcrumb page="Performance" />
    <div class="row mb-2">
      <div class="col-lg-10">
        <div class="box">
          <Performancelayout />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10">
        <div class="box">
          <Performancelayout1 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../layouts/Breadcrumb";
import Performancelayout from "../layouts/Performancelayout";
import Performancelayout1 from "../layouts/Performancelayout1";

export default {
  name: "Performance",
  components: {
    Breadcrumb,
    Performancelayout,
    Performancelayout1
  }
};
</script>

<style scoped>
.box {
  background: rgba(239, 239, 239, 0.45);
  border: 1px solid rgba(112, 112, 112, 0.45);
  border-radius: 13px;
  padding: 30px;
}
</style>
