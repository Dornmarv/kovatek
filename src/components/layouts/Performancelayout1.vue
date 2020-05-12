<template>
  <div>
    <div class="row">
      <div class="col-lg-7">
        <div class="box1 mb-3">
          <div class="row mb-1">
            <div class="col-lg-8">
              <p class="text1 text-left pb-4">Component</p>
              <div style="float: left">
                <p class="text2 text-left mr-2">General</p>
                <p class="text3 text-left">Individual</p>
              </div>
              <p class="text4">User Interface</p>
            </div>
            <div class="col-lg-4">
              <div>
                <a-progress
                  type="circle"
                  :strokeColor="{strokecolor}"
                  :strokeWidth="8"
                  :percent="45"
                  :width="100"
                />
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-3 text-left">
              <p class="assignee mt-2">
                <img src="../../assets/images/assignees.svg" class="mr-1" alt />
                Assignees
                <i class="fas fa-angle-down"></i>
              </p>
            </div>
            <div class="col-lg-4 text-left">
              <div>
                <img src="../../assets/images/member1.svg" class="responsive-img" width="25%" alt />
                <h4 class="name" style="display: inline-block;">
                  Mike. P
                  <img src="../../assets/images/approved.svg" class="responsive-img" alt />
                </h4>
              </div>
            </div>
            <div class="col-lg-5 text-left">
              <p>
                <img src="../../assets/images/left.svg" class="responsive-img mr-2" alt />
                <img src="../../assets/images/right.svg" class="responsive-img" alt />
                <span class="font-italic toggle ml-1">Toogle Components</span>
              </p>
            </div>
          </div>

          <div class="text-left">
            <button type="button" class="btn btn4 btn mx-1">Total Issues: 5</button>
            <button type="button" class="btn btn4 btn mx-1">Completed: 5</button>
            <button type="button" class="btn btn4 btn mx-1">In progress</button>
            <button type="button" class="btn btn4 btn mx-1">Backlog</button>
          </div>
        </div>

        <div class="box1">
          <div class="row mb-1">
            <div class="col-lg-8">
              <p class="text1 text-left pb-4">Milestone</p>
              <div style="float: left">
                <p class="text2 text-left mr-2">General</p>
                <p class="text3 text-left">Individual</p>
              </div>
              <p class="text4">API Integration</p>
            </div>
            <div class="col-lg-4">
              <div>
                <a-progress
                  type="circle"
                  :strokeColor="{strokecolor}"
                  :strokeWidth="8"
                  :percent="45"
                  :width="100"
                />
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-lg-12">
              <p class="txt2">
                Start
                <span class="txt3 ml-2">Monday, 20th of Febuary 2020.</span>
              </p>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-lg-7">
              <p class="txt2">
                End
                <span class="txt4 ml-3">Monday, 20th of Febuary 2020.</span>
              </p>
            </div>
            <div class="col-lg-5 text-left">
              <p>
                <img src="../../assets/images/left.svg" class="responsive-img mr-2" alt />
                <img src="../../assets/images/right.svg" class="responsive-img" alt />
                <span class="font-italic toggle ml-1">Toogle Components</span>
              </p>
            </div>
          </div>

          <div class="text-left">
            <button type="button" class="btn btn4 btn mx-1">Total Issues: 5</button>
            <button type="button" class="btn btn4 btn mx-1">Completed: 5</button>
            <button type="button" class="btn btn4 btn mx-1">In progress</button>
            <button type="button" class="btn btn4 btn mx-1">Backlog</button>
          </div>
        </div>
      </div>

      <div class="col-lg-5">
        <div class="box1">
          <p class="text1 text-left pb-4">Review and rating</p>
          <div>
            <div class="row">
              <div class="col-lg-10">
                <div class="box2 text-left">
                  <div class="row">
                    <div class="col-lg-3 text-left">
                      <img
                        src="../../assets/images/member1.svg"
                        class="responsive-img"
                        width="55px"
                        alt
                      />
                    </div>
                    <div class="col-lg-9">
                      <h4 class="name mb-1">
                        Mike. P
                        <img
                          src="../../assets/images/approved.svg"
                          class="responsive-img"
                          alt
                        />
                      </h4>
                      <p class="role font-italic mb-1">Back-end Developer</p>
                      <p class="level">Senior</p>
                      <div class="skills">
                        <small class="skill mr-2">PHP</small>
                        <small class="skill mr-2">Nodejs</small>
                        <small class="skill mr-2">Go</small>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2" style="padding-left: 1px;">
                <p class="text-left" style="font-size: 11px;">
                  <img src="../../assets/images/view.svg" class="responsive-img" alt /> View
                </p>
                <p class="text-left" style="font-size: 11px;">
                  <img src="../../assets/images/review.svg" class="responsive-img" alt /> Review
                </p>
              </div>
            </div>
            <div class="row mt-3 mb-2">
              <div class="col-lg-9">
                <p
                  class="qoute font-italic"
                >“Solid experience with PHP and extJS. Good quality work.”</p>
              </div>
              <div class="col-lg-3">
                <p class="rating mt-2">
                  <img src="../../assets/images/rating.svg" class="responsive-img" alt /> 9.5
                </p>
              </div>
            </div>
          </div>

          <div>
            <div class="row">
              <div class="col-lg-10">
                <div class="box2 text-left">
                  <div class="row">
                    <div class="col-lg-3 text-left">
                      <img
                        src="../../assets/images/member2.svg"
                        class="responsive-img"
                        width="55px"
                        alt
                      />
                    </div>
                    <div class="col-lg-9">
                      <h4 class="name mb-1">
                        Mike. P
                        <img
                          src="../../assets/images/approved.svg"
                          class="responsive-img"
                          alt
                        />
                      </h4>
                      <p class="role font-italic mb-1">Back-end Developer</p>
                      <p class="level">Senior</p>
                      <div class="skills">
                        <small class="skill mr-2">PHP</small>
                        <small class="skill mr-2">Nodejs</small>
                        <small class="skill mr-2">Go</small>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2" style="padding-left: 1px;">
                <p class="text-left" style="font-size: 11px;">
                  <img src="../../assets/images/view.svg" class="responsive-img" alt /> View
                </p>
                <p class="text-left" style="font-size: 11px;">
                  <img src="../../assets/images/review.svg" class="responsive-img" alt /> Review
                </p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-lg-9">
                <p
                  class="qoute font-italic"
                >“Solid experience with PHP and extJS. Good quality work.”</p>
              </div>
              <div class="col-lg-3">
                <p class="rating mt-2">
                  <img src="../../assets/images/rating.svg" class="responsive-img" alt /> 9.5
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg-11 text-left">
            <button type="button" class="btn btn2 btn-sm" @click="showModalrating">
              Team Work Rating and Review
              <img
                src="../../assets/images/btn-rating.svg"
                class="ml-2"
                alt
              />
            </button>
            <a-modal v-model="ratingvisible" :bodyStyle="modalStyle" :footer="null" @ok="handleOk">
              <form>
                <div class="row mt-4">
                  <div class="col-lg-10">
                    <div class="form-group">
                      <label
                        for="exampleFormControlTextarea1"
                        class="font-italic"
                        style="color: #343A40"
                      >Write your review</label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        style="border: 1px solid #707070"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="form-group">
                      <label
                        for="exampleFormControlSelect1"
                        class="font-italic"
                        style="color: #343A40"
                      >Rate</label>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        style="height: 87px; background: #EFEFEF; font-weight: bold;"
                      >
                        <option>8.5</option>
                        <option>9.0</option>
                        <option selected>9.5</option>
                        <option>10.0</option>
                        <option>10.5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-7"></div>
                  <div class="col-lg-5">
                    <button
                      type="submit"
                      class="btn btn2"
                      style="padding: 4px 30px; border-radius: 20px;"
                    >Save</button>
                  </div>
                </div>
              </form>
            </a-modal>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg-9">
            <p class="qoute font-italic">“Solid experience with PHP and extJS. Good quality work.”</p>
          </div>
          <div class="col-lg-3">
            <p class="rating mt-2">
              <img src="../../assets/images/rating.svg" class="responsive-img" alt /> 9.5
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Performancelayout1",
  data() {
    return {
      strokecolor: "#4BB38E",
      ratingvisible: false,
      modalStyle:
        "background: #fff; border: 1px solid #6f6f6f; border-radius: 5px;"
    };
  },
  methods: {
    showModalrating() {
      this.ratingvisible = true;
    },
    handleOk(e) {
      console.log(e);
      this.ratingvisible = false;
    }
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
.box2 {
  border: 1px solid rgba(112, 112, 112, 0.44);
  background: white;
  border-radius: 7px;
  padding: 20px;
}
.text1 {
  color: #343a40;
  font-weight: bold;
}
.text2 {
  font-weight: bold;
  color: white;
  background: #1c4798;
  padding: 5px 20px;
  display: inline-block;
  border-radius: 3px;
}
.text3 {
  font-weight: bold;
  color: #1c4798;
  background: #e9edf5;
  padding: 5px 20px;
  display: inline-block;
  border-radius: 3px;
}
.text4 {
  font-weight: bold;
  color: #343a40;
  background: #efefef;
  padding: 7px 20px;
  border-radius: 3px;
  border: 1px solid #979a9d;
  text-align: left;
  font-size: 18px;
  clear: both;
}

.txt2 {
  font-weight: light;
  color: #343a40;
  font-style: italic;
  font-size: 12px;
  text-align: left;
}
.txt3 {
  font-weight: bold;
  color: #343a40;
  font-style: normal;
  background: #efefef;
  padding: 3px 7px;
  font-size: 12px;
  margin-left: 9px;
}
.txt4 {
  font-weight: bold;
  color: white;
  font-style: normal;
  background: #ee5932;
  padding: 3px 7px;
  font-size: 12px;
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
.assignee {
  color: #1c4798;
  font-weight: bold;
  font-size: 11px;
}
.toggle {
  color: #343a40;
  font-weight: light;
  font-size: 11px;
}
.skill {
  background: #c0e4d7;
  color: #343a40;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  height: 14px;
}
.level {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
}
.role {
  font-size: 11px;
}
.name {
  font-size: 14px;
}
.rating {
  color: #4bb38e;
  font-weight: bold;
  font-size: 17px;
}
.btn2 {
  background: #1c4798;
  color: white;
  font-weight: bold;
  padding: 6px 15px;
}
</style>