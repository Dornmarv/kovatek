<template>
  <div>
    <div class="row" style="text-align: left">
      <div class="col-lg-8">
        <p class="title">{{ page }}</p>
      </div>
      <div class="col-lg-4 text-right">
        <router-link to="/components/create-component">
          <button type="button" class="btn btn2 btn-sm">
            Add new component |
            <i class="fas fa-plus"></i>
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col" class="font-italic font-weight-light table-header">Component</th>
              <th scope="col" class="font-italic font-weight-light table-header">Description</th>
              <th scope="col" class="font-italic font-weight-light table-header">Component lead</th>
              <th scope="col" class="font-italic font-weight-light table-header">Default assignee</th>
              <th scope="col" class="font-italic font-weight-light table-header">Issues</th>
              <th scope="col" class="font-italic font-weight-light table-header"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <th scope="row" class="component-title">Database</th>
              <td class="component-text">The comprises of 8...</td>
              <td></td>
              <td class="component-text">Project default</td>
              <td class="component-title">0 issues</td>
              <td class="action">
                <img src="../../assets/images/export-component.svg" alt />
              </td>
            </tr>
            <tr class="table-row">
              <th scope="row" class="component-title">API</th>
              <td class="component-text">The comprises of 8...</td>
              <td></td>
              <td class="component-text">Project default</td>
              <td class="component-title">0 issues</td>
              <td class="action">
                <img src="../../assets/images/export-component.svg" alt />
              </td>
            </tr>
            <tr class="table-row">
              <th scope="row" class="component-title">Design</th>
              <td class="component-text">The comprises of 8...</td>
              <td></td>
              <td class="component-text">Project default</td>
              <td class="component-title">0 issues</td>
              <td class="action">
                <img src="../../assets/images/export-component.svg" alt />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Componentslayout",
  props: {
    page: {
      type: String
    }
  }
};
</script>

<style scoped>
.title {
  color: #343a40;
  font-size: 20px;
  font-weight: bold;
}
.btn2 {
  background: #1c4798;
  color: white;
  font-weight: bold;
}
.btn3 {
  background: #e9edf5;
  color: #1c4798;
  font-weight: bold;
  float: right;
}
.btn4 {
  background: #c0e4d7;
  color: #343a40;
  font-style: italic;
}

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #979a9d;
}
.table-header {
  color: rgba(52, 58, 64, 0.62);
}
.table-row {
  background: white;
  border-radius: 4px;
  margin-inline: 150px;
}
.component-title {
  color: #1c4798;
  font-weight: bold;
}
.component-text {
  color: #343a40;
  font-weight: light;
  font-style: italic;
}
</style>
