<template>
  <div>
    <div class="row " style="text-align: left">
      <div class="col-lg-12">
        <p class="title">{{ page }}</p>
      </div>
    </div>

    <div class="row text-left">
      <div class="col-lg-12 ">
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

          <div class="form-group mb-5">
            <label for="exampleFormControlTextarea1" class="font-italic"
              >Write</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
            ></textarea>
          </div>
          <div class="row">
            <div class="col-lg-9">
              <div class="form-group">
                <label
                  for="exampleFormControlTextarea1"
                  class="font-weight-bold"
                  style="color: #1C4798;"
                  >Attach File</label
                >
                <input
                  type="file"
                  class="form-control-file"
                  placeholder="upload image"
                  id="exampleFormControlFile1"
                />
              </div>
            </div>
            <div class="col-lg-3">
              <button type="submit" class="btn btn1 mr-4 ">
                Save Changes
              </button>
              <a href="" class="cancel mt-3 ">Cancel</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MilestoneNewissuelayout",
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
  background: #e9edf5;
  color: #1c4798;
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
