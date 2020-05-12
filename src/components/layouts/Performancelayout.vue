<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <div class="box1">
          <div class="row mb-5">
            <div class="col-lg-4">
              <p class="text1 text-left">Overall</p>
            </div>
            <div class="col-lg-6">
              <div>
                <a-progress
                  type="circle"
                  :strokeColor="{strokecolor}"
                  :strokeWidth="8"
                  :percent="50"
                  :width="100"
                />
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-lg-12 text-left">
              <button type="button" class="btn btn4 btn-sm mx-1">Total Issues: 5</button>
              <button type="button" class="btn btn4 btn-sm mx-1">Completed: 5</button>
            </div>
            <div class="col-lg-6"></div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-left">
              <button type="button" class="btn btn4 btn-sm mx-1">In progress</button>
              <button type="button" class="btn btn4 btn-sm mx-1">Backlog</button>
            </div>
            <div class="col-lg-6"></div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="box1">
          <div class="row mb-5">
            <div class="col-lg-6">
              <p class="text1 text-left">Team Performance</p>
            </div>
            <div class="col-lg-5">
              <div>
                <a-progress
                  type="circle"
                  :strokeColor="{strokecolor}"
                  :strokeWidth="8"
                  :percent="65"
                  :width="100"
                />
              </div>
            </div>
          </div>
          <div class="row mb-2 pt-4">
            <div class="col-lg-12 text-left">
              <button
                type="button"
                class="btn btn4 btn-sm mx-1 mr-2"
                style="display: inline-block"
              >Total number of Team: 5</button>
              <img src="../../assets/images/members-card.svg" style="display: inline-block" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="box1">
          <div class="row mb-3">
            <div class="col-lg-12">
              <p class="text1 text-left">Timeline & Dates</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-lg-12">
              <p class="time">9days:</p>
              <p class="time">20hrs:</p>
              <p class="time">30mins</p>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-lg-12">
              <p class="text2">
                Start
                <span class="text3">Monday, 20th of Febuary 2020.</span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <p class="text2">
                End
                <span class="text4">Monday, 20th of Febuary 2020.</span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <p class="text2">
                Duration
                <span class="text5">4 weeks.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Performancelayout",
  data() {
    return {
      strokecolor: "#4BB38E"
    };
  }
};
</script>

<style scoped>
.box1 {
  border: 1px solid #707070;
  background: white;
  border-radius: 7px;
  padding: 20px;
}
.text1 {
  color: #343a40;
  font-weight: bold;
}
.text2 {
  font-weight: light;
  color: #343a40;
  font-style: italic;
  font-size: 10px;
  text-align: left;
}
.text3 {
  font-weight: bold;
  color: #343a40;
  font-style: normal;
  background: #efefef;
  padding: 3px 7px;
  font-size: 11px;
  margin-left: 9px;
}
.text4 {
  font-weight: bold;
  color: white;
  font-style: normal;
  background: #ee5932;
  padding: 3px 7px;
  font-size: 11px;
  margin-left: 9px;
}
.text5 {
  font-weight: bold;
  color: #343a40;
  font-style: normal;
  font-size: 14px;
  margin-left: 9px;
}
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
.btn4 {
  background: #c0e4d7;
  color: #343a40;
  font-style: italic;
  font-size: 12px;
}
.time {
  background: #343a40;
  color: white;
  font-weight: bolder;
  font-size: 17px;
  padding: 6px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 5px;
}
</style>