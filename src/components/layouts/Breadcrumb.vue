<template>
  <nav aria-label="breadcrumb" class="mt-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">JB Finance</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{ page }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    page: {
      type: String
    }
  }
};
</script>

<style scoped>
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
