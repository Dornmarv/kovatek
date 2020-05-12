<template>
  <div>
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">JB Finance</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Component</li>
        <li class="breadcrumb-item active" aria-current="page">Create Component</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-lg-10">
        <div class="box">
          <Createcomponentlayout page="Create component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Createcomponentlayout from "../layouts/Createcomponentlayout";

export default {
  name: "CreateComponent",
  components: {
    Createcomponentlayout
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
