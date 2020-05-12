<template>
  <div>
    <div class="row" style="text-align: left">
      <div class="col-lg-12">
        <p class="title">{{ page }}</p>
      </div>
    </div>

    <div class="row text-left">
      <div class="col-lg-12">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1" class="font-italic">Name*</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="font-italic">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1" class="font-italic">Component Lead</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>John Doe</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group mb-5">
            <label for="exampleFormControlSelect1" class="font-italic">Default Assignee</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>John Doe</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <button type="submit" class="btn btn1 mr-4">Save Changes</button>
          <a href class="cancel mt-3">Cancel</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Createcomponentlayout",
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
.btn1 {
  background: #1c4798;
  color: white;
  font-weight: bold;
  font-size: 14px;
}
.btn3 {
  background: #e9edf5;
  color: #1c4798;
  font-weight: bold;
  float: right;
}
.cancel {
  color: #343a40;
  font-weight: bold;
}
.text2 {
  color: #343a40;
  font-style: italic;
}
.text3 {
  color: #343a40;
  font-weight: bold;
}
</style>
