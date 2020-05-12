<template>
  <div>
    <Breadcrumb page="Members" />
    <div class="row">
      <div class="col-lg-10">
        <div class="box">
          <Memberslayout page="Members" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../layouts/Breadcrumb";
import Memberslayout from "../layouts/Memberslayout";

export default {
  name: "Board",
  components: {
    Breadcrumb,
    Memberslayout
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
