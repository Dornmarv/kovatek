<template>
  <div>
    <div class="row mb-5" style="text-align: left">
      <div class="col-lg-12">
        <p class="title">{{ page }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-9">
        <div style="text-align: left;">
          <img
            src="../../assets/images/notifications-user.svg"
            class="responsive-img"
            alt=""
          />
          <p class="text1">
            Sun Yeoun W <span class="text2">just commented on </span> Project ID
            456783
          </p>
        </div>
      </div>
      <div class="col-lg-3">
        <img
          src="../../assets/images/chart.svg"
          class="responsive-img"
          alt=""
          style="text-align: right;"
          align="right"
        />

        <p class="text3 pt-2" style="clear: both; text-align: right;">
          <img
            src="../../assets/images/time.svg"
            class="responsive-img mr-4"
            alt=""
          />30 minutes ago
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-lg-9">
        <div style="text-align: left;">
          <img
            src="../../assets/images/notifications-user.svg"
            class="responsive-img"
            alt=""
          />
          <p class="text1">
            Sun Yeoun W <span class="text2">just commented on </span> Project ID
            456783
          </p>
        </div>
      </div>
      <div class="col-lg-3">
        <img
          src="../../assets/images/alarm-plus.svg"
          class="responsive-img"
          alt=""
          style="text-align: right;"
          align="right"
        />

        <p class="text3 pt-2" style="clear: both; text-align: right;">
          <img
            src="../../assets/images/time.svg"
            class="responsive-img mr-4"
            alt=""
          />30 minutes ago
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-lg-9">
        <div style="text-align: left;">
          <img
            src="../../assets/images/notifications-user.svg"
            class="responsive-img"
            alt=""
          />
          <p class="text1">
            Sun Yeoun W <span class="text2">just commented on </span> Project ID
            456783
          </p>
        </div>
      </div>
      <div class="col-lg-3">
        <img
          src="../../assets/images/chart.svg"
          class="responsive-img"
          alt=""
          style="text-align: right;"
          align="right"
        />

        <p class="text3 pt-2" style="clear: both; text-align: right;">
          <img
            src="../../assets/images/time.svg"
            class="responsive-img mr-4"
            alt=""
          />30 minutes ago
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-lg-9">
        <div style="text-align: left;">
          <img
            src="../../assets/images/notifications-user.svg"
            class="responsive-img"
            alt=""
          />
          <p class="text1">
            Sun Yeoun W <span class="text2">just commented on </span> Project ID
            456783
          </p>
        </div>
      </div>
      <div class="col-lg-3">
        <img
          src="../../assets/images/alarm-plus.svg"
          class="responsive-img"
          alt=""
          style="text-align: right;"
          align="right"
        />

        <p class="text3 pt-2" style="clear: both; text-align: right;">
          <img
            src="../../assets/images/time.svg"
            class="responsive-img mr-4"
            alt=""
          />30 minutes ago
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-lg-9">
        <div style="text-align: left;">
          <img
            src="../../assets/images/notifications-user.svg"
            class="responsive-img"
            alt=""
          />
          <p class="text1">
            Sun Yeoun W <span class="text2">just commented on </span> Project ID
            456783
          </p>
        </div>
      </div>
      <div class="col-lg-3">
        <img
          src="../../assets/images/chart.svg"
          class="responsive-img"
          alt=""
          style="text-align: right;"
          align="right"
        />

        <p class="text3 pt-2" style="clear: both; text-align: right;">
          <img
            src="../../assets/images/time.svg"
            class="responsive-img mr-4"
            alt=""
          />30 minutes ago
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-lg-9">
        <div style="text-align: left;">
          <img
            src="../../assets/images/notifications-user.svg"
            class="responsive-img"
            alt=""
          />
          <p class="text1">
            Sun Yeoun W <span class="text2">just commented on </span> Project ID
            456783
          </p>
        </div>
      </div>
      <div class="col-lg-3">
        <img
          src="../../assets/images/alarm-plus.svg"
          class="responsive-img"
          alt=""
          style="text-align: right;"
          align="right"
        />

        <p class="text3 pt-2" style="clear: both; text-align: right;">
          <img
            src="../../assets/images/time.svg"
            class="responsive-img mr-4"
            alt=""
          />30 minutes ago
        </p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Notifications",
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
.text1 {
  color: #1c4798;
  font-weight: bold;
  display: inline-block;
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
