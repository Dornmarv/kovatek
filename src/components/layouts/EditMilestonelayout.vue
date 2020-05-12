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
            <label for="exampleInputEmail1" class="font-italic">Milestone Title</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value="Communication API"
            />
          </div>

          <div class="form-group mb-5">
            <label for="exampleFormControlTextarea1" class="font-italic">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. 

Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras.</textarea>
          </div>
          <router-link to="/milestone">
            <button type="submit" class="btn btn2 mr-4">Save Changes</button>
          </router-link>
          <router-link to="/milestone">
            <a href class="cancel mt-3">Cancel</a>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditMilestonelayout",
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
