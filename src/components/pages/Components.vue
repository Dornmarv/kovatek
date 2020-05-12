<template>
  <div>
    <Breadcrumb page="Milestone" />
    <div class="row">
      <div class="col-lg-11">
        <div class="box">
          <Componentslayout page="Components" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../layouts/Breadcrumb";
import Componentslayout from "../layouts/Componentslayout";

export default {
  name: "Board",
  components: {
    Breadcrumb,
    Componentslayout
  }
};
</script>

<style scoped>
.box {
  background: rgba(239, 239, 239, 0.45);
  border: 1px solid rgba(112, 112, 112, 0.45);
  border-radius: 13px;
  padding: 30px;
  min-height: 550px;
}
</style>
