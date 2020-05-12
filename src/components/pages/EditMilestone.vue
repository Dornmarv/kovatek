<template>
  <div>
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">JB Finance</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Milestone</li>
        <li class="breadcrumb-item active" aria-current="page">Edit Milestone</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-lg-7">
        <div class="box">
          <EditMilestonelayout page="Edit Milestone" />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="box">
          <p class="title">Set Date and Time</p>
          <div :style="{ border: 'none', borderRadius: '4px', background: '#fff' }">
            <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditMilestonelayout from "../layouts/EditMilestonelayout";

export default {
  name: "EditMilestone",
  components: {
    EditMilestonelayout
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
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

.title {
  color: #343a40;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
}
.breadcrumb {
  background: none;
}

.breadcrumb-item a {
  color: #1c4798;
  font-weight: bold;
  font-size: 15px;
}

.breadcrumb-item.active {
  color: #979a9d;
  font-weight: bold;
  font-size: 15px;
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: ">" !important;
}
</style>
