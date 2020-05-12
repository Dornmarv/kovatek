<template>
  <div>
    <div class="row" style="text-align: left">
      <div class="col-lg-8">
        <p class="title">{{ page }}</p>
      </div>
      <div class="col-lg-4 text-right">
        <router-link to="/milestone/new-issue">
          <button type="button" class="btn btn2 btn-sm" @click="showModal1 = true">
            Add new milestone |
            <i class="fas fa-plus"></i>
          </button>
        </router-link>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col lg-12">
        <div class="card">
          <div class="card-body" style="text-align: left">
            <div class="dib">
              <p class="milestone-name">Router Integration</p>
              <button type="button" class="btn btn3 btn-sm mx-1">Delete Milestone</button>
              <button type="button" class="btn btn3 btn-sm mx-1">Close Milestone</button>
              <router-link to="/milestone/edit-milestone">
                <button type="button" class="btn btn3 btn-sm mx-1">Edit Milestone</button>
              </router-link>
            </div>
            <hr class="line" />
            <p class="text1">Communication API</p>
            <p class="text4">
              Start
              <span class="text3">Sept 22, 2019.</span>
              <span class="text2">Sept 30, 2019. Past Due by 5 months.</span>
              Due by Duration:
              <span class="text3">9 days</span>
            </p>
            <button type="button" class="btn btn4 btn-sm mx-1">Total issues: 5</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col lg-12">
        <div class="card">
          <div class="card-body" style="text-align: left">
            <div class="dib">
              <p class="milestone-name">Router Integration</p>
              <button type="button" class="btn btn3 btn-sm mx-1">Delete Milestone</button>
              <button type="button" class="btn btn3 btn-sm mx-1">Close Milestone</button>
              <router-link to="/milestone/edit-milestone">
                <button type="button" class="btn btn3 btn-sm mx-1">Edit Milestone</button>
              </router-link>
            </div>
            <hr class="line" />
            <p class="text1">Communication API</p>
            <p class="text4">
              Start
              <span class="text3">Sept 22, 2019.</span>
              <span class="text2">Sept 30, 2019. Past Due by 5 months.</span>
              Due by Duration:
              <span class="text3">9 days</span>
            </p>
            <button type="button" class="btn btn4 btn-sm mx-1">Total issues: 5</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Milestones",
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

.milestone-name {
  color: #343a40;
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
}
.dib {
  text-align: left;
}
.card {
  border: none;
}
.line {
  background-color: rgba(52, 58, 64, 0.35);
}
.text1 {
  font-style: italic;
}
.text2 {
  font-style: normal;
  color: #ee5932;
  font-weight: bold;
}
.text3 {
  font-style: normal;
  font-weight: bold;
}
p.text4 {
  font-style: italic;
}
</style>
