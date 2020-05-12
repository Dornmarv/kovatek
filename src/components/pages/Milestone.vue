<template>
  <div>
    <Breadcrumb page="Milestone" />
    <div class="row">
      <div class="col-lg-10">
        <div class="box">
          <Milestones page="Milestones" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../layouts/Breadcrumb";
import Milestones from "../layouts/Milestones";

export default {
  name: "Board",
  components: {
    Breadcrumb,
    Milestones
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
