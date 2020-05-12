<template>
  <div>
    <Breadcrumb page="Board" />
    <div class="box">
      <Heading page="Board" />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../layouts/Breadcrumb";
import Heading from "../layouts/Heading";
export default {
  name: "Board",
  components: {
    Breadcrumb,
    Heading
  }
};
</script>

<style scoped>
.box {
  background: #efefef;
  border: 1px solid rgba(112, 112, 112, 0.45);
  border-radius: 13px;
  padding: 30px;
}
</style>
