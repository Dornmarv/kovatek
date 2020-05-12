<template>
  <div>
    <div class="row" style="text-align: left">
      <div class="col-lg-8">
        <p class="title">{{ page }}</p>
      </div>
      <div class="col-lg-4 text-right">
        <button type="button" class="btn btn2 btn-sm" @click="showModal1 = true">
          Add a new Member |
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-body" style="text-align: left">
        <div class="row">
          <div class="col-md-auto">
            <img src="../../assets/images/member1.svg" class="responsive-img" alt />
          </div>
          <div class="col col-lg-7">
            <div>
              <h4 class="name">
                Mike. P
                <img src="../../assets/images/approved.svg" class="responsive-img" alt />
              </h4>
              <p class="role">Back-end Developer</p>
              <p class="level">Senior</p>
              <div class="skills">
                <small class="skill mr-2">PHP</small>
                <small class="skill mr-2">Nodejs</small>
                <small class="skill mr-2">Go</small>
                <img src="../../assets/images/location.svg" class="responsive-img mr-2 ml-4" alt />
                <p class="address">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div class="col col-lg-3">
            <button type="button" class="btn btn3 btn-sm mx-1">Remove member</button>
            <div class="ratingdiv text-right">
              <p class="rating mt-2">
                <img src="../../assets/images/rating.svg" class="responsive-img" alt /> 9.5
                <span class="reviews-number ml-2">56 reviews</span>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-10">
            <a-collapse :bordered="false">
              <template #expandIcon="props">
                <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
              </template>
              <a-collapse-panel
                key="1"
                header="View more details"
                headerClass="headerclass"
                :style="customStyle"
              >
                <div class="row mb-3">
                  <div class="col-lg-8">
                    <p class="topic">Login Setup</p>
                    <div style="display: inline-block;">
                      <p class="date mr-4">Monday, 20th of January 2020</p>
                      <img class="mr-4" src="../../assets/images/approve.svg" alt />
                      <a class="approve-text">Approve</a>
                    </div>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-3">
                    <div class="money">
                      <p class="amount">$210</p>
                      <p class="sign">USD</p>
                    </div>
                    <button
                      type="submit"
                      class="btn btn2 mt-2"
                      style="padding: 4px 28px; border-radius: 4px; font-size: 13px;"
                    >Release Fund</button>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-lg-8">
                    <p class="topic">API Integration</p>
                    <div style="display: inline-block;">
                      <p class="date mr-4">Monday, 20th of January 2020</p>
                      <img class="mr-4" src="../../assets/images/approve.svg" alt />
                      <a class="approve-text">Approve</a>
                    </div>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-3">
                    <div class="money">
                      <p class="amount">$210</p>
                      <p class="sign">USD</p>
                    </div>
                    <button
                      type="submit"
                      class="btn btn2 mt-2"
                      style="padding: 4px 28px; border-radius: 4px; font-size: 13px;"
                    >Release Fund</button>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-lg-8">
                    <p class="topic">API Integration</p>
                    <div style="display: inline-block;">
                      <p class="date mr-4">Monday, 20th of January 2020</p>
                      <img class="mr-4" src="../../assets/images/approve.svg" alt />
                      <a class="approve-text">Approve</a>
                    </div>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-3">
                    <div class="money">
                      <p class="amount">$210</p>
                      <p class="sign">USD</p>
                    </div>
                    <button
                      type="submit"
                      class="btn btn2 mt-2"
                      style="padding: 4px 28px; border-radius: 4px; font-size: 13px;"
                    >Release Fund</button>
                  </div>
                </div>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body" style="text-align: left">
        <div class="row">
          <div class="col-md-auto">
            <img src="../../assets/images/member2.svg" class="responsive-img" alt />
          </div>
          <div class="col col-lg-7">
            <div>
              <h4 class="name">
                Mike. P
                <img src="../../assets/images/approved.svg" class="responsive-img" alt />
              </h4>
              <p class="role">Back-end Developer</p>
              <p class="level">Senior</p>
              <div class="skills">
                <small class="skill mr-2">PHP</small>
                <small class="skill mr-2">Nodejs</small>
                <small class="skill mr-2">Go</small>
                <img src="../../assets/images/location.svg" class="responsive-img mr-2 ml-4" alt />
                <p class="address">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div class="col col-lg-3">
            <button type="button" class="btn btn3 btn-sm mx-1">Remove member</button>
            <div class="ratingdiv text-right">
              <p class="rating mt-2">
                <img src="../../assets/images/rating.svg" class="responsive-img" alt /> 9.5
                <span class="reviews-number ml-2">56 reviews</span>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-10">
            <a-collapse :bordered="false">
              <template #expandIcon="props">
                <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
              </template>
              <a-collapse-panel key="1" header="View more details" :style="customStyle">
                <div class="row mb-3">
                  <div class="col-lg-8">
                    <p class="topic">Login Setup</p>
                    <div style="display: inline-block;">
                      <p class="date mr-4">Monday, 20th of January 2020</p>
                      <img class="mr-4" src="../../assets/images/approve.svg" alt />
                      <a class="approve-text">Approve</a>
                    </div>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-3">
                    <div class="money">
                      <p class="amount">$210</p>
                      <p class="sign">USD</p>
                    </div>
                    <button
                      type="submit"
                      class="btn btn2 mt-2"
                      style="padding: 4px 28px; border-radius: 4px; font-size: 13px;"
                    >Release Fund</button>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-lg-8">
                    <p class="topic">API Integration</p>
                    <div style="display: inline-block;">
                      <p class="date mr-4">Monday, 20th of January 2020</p>
                      <img class="mr-4" src="../../assets/images/approve.svg" alt />
                      <a class="approve-text">Approve</a>
                    </div>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-3">
                    <div class="money">
                      <p class="amount">$210</p>
                      <p class="sign">USD</p>
                    </div>
                    <button
                      type="submit"
                      class="btn btn2 mt-2"
                      style="padding: 4px 28px; border-radius: 4px; font-size: 13px;"
                    >Release Fund</button>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-lg-8">
                    <p class="topic">API Integration</p>
                    <div style="display: inline-block;">
                      <p class="date mr-4">Monday, 20th of January 2020</p>
                      <img class="mr-4" src="../../assets/images/approve.svg" alt />
                      <a class="approve-text">Approve</a>
                    </div>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-3">
                    <div class="money">
                      <p class="amount">$210</p>
                      <p class="sign">USD</p>
                    </div>
                    <button
                      type="submit"
                      class="btn btn2 mt-2"
                      style="padding: 4px 28px; border-radius: 4px; font-size: 13px;"
                    >Release Fund</button>
                  </div>
                </div>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Memberslayout",
  data() {
    return {
      customStyle:
        "background: #fff;border-radius: 4px; color: #5087ef;margin-bottom: 24px;border: 0;overflow: hidden;"
    };
  },
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
.skill {
  background: #c0e4d7;
  color: #343a40;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  height: 14px;
}
.address {
  display: inline-block;
}
.card {
  border: none;
}
.level {
  text-transform: uppercase;
  font-weight: bold;
}
.date {
  display: inline-block;
}
.ant-collapse.ant-collapse-item.ant-collapse-header {
  position: relative;
  padding: 12px 16px;
  padding-left: 90px;
  color: unset !important;
  line-height: 22px;
  cursor: pointer;
  transition: all 0.3s;
}
.ratingdiv {
  padding-top: 100px;
}
.rating {
  color: #4bb38e;
  font-weight: bold;
  font-size: 17px;
}
.rating span {
  color: #343a40;
  font-size: 12px;
  font-weight: normal;
}
.topic {
  color: #000000;
  font-size: 18px;
  border: 1px solid #707070;
  padding: 11px;
  border-radius: 8px;
}
.date {
  font-weight: bold;
  color: #343a40;
  font-style: normal;
  background: #efefef;
  padding: 3px 7px;
  font-size: 12px;
  border-radius: 5px;
}
.approve-text {
  color: #343a40;
  font-size: 17px;
  font-weight: bold;
  display: inline-block;
}
.money {
  border: 1px solid #707070;
  padding: 9px;
  border-radius: 8px;
}
.amount {
  display: inline-block;
  color: #000000;
  font-size: 18px;
  margin-bottom: 0em;
  margin-left: 5px;
  font-weight: bold;
}
.sign {
  display: inline-block;
  color: #000000;
  margin-left: 30px;
  margin-bottom: 0em;
}
</style>
