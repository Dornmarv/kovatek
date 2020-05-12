<template>
  <div>
    <div class="row" style="text-align: left">
      <div class="col-lg-6">
        <p class="title">{{ page }}</p>
      </div>
      <div class="col">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder />
        </div>
      </div>
      <div class="col-md-auto text-right">
        <button type="button" class="btn btn1 btn-sm" @click="showModalnewissue">
          New issue |
          <i class="fas fa-plus"></i>
        </button>
        <a-modal v-model="newissuevisible" :bodyStyle="modalStyle" :footer="null" @ok="handleOk">
          <div class="row">
            <div class="col-lg-7">
              <p class="title">New issue</p>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1" class="font-italic">Component</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>John Doe</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="font-italic">Title</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1" class="font-italic">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">Add login onboarding...</label>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1" class="font-italic">Write a comment</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>

                <button type="submit" class="btn btn2">Save</button>
              </form>
            </div>
            <div class="col-lg-5">
              <div class="mt-5">
                <p class="font-italic">Add to card</p>
                <a-dropdown :trigger="['click']" placement="bottomCenter">
                  <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <button type="button" class="btn btn-label btn-sm mb-1">
                      <img src="../../assets/images/labels.svg" class="mr-1" alt />
                      Labels
                      <i class="fas fa-plus ml-5 labels-icon"></i>
                    </button>
                  </a>
                  <a-menu
                    slot="overlay"
                    style="padding-right: 30px; padding-left: 10px; padding-top: 20px;"
                  >
                    <a-menu-item key="0">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/urgent.svg" class="mr-2" alt /> urgent
                      </a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/restart.svg" class="mr-2" alt /> restart
                      </a>
                    </a-menu-item>
                    <a-menu-item key="2">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/redo.svg" class="mr-2" alt /> redo
                      </a>
                    </a-menu-item>
                    <a-menu-item key="3">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/undo.svg" class="mr-2" alt /> undo
                      </a>
                    </a-menu-item>
                    <a-menu-item key="4">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/backup.svg" class="mr-2" alt /> backup
                      </a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>

                <a-dropdown :trigger="['click']" placement="bottomCenter">
                  <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <button type="button" class="btn btn-label btn-sm mb-1">
                      <img src="../../assets/images/assignees.svg" class="mr-1" alt />
                      Assignees
                      <i class="fas fa-plus ml-4 labels-icon"></i>
                    </button>
                  </a>
                  <a-menu
                    slot="overlay"
                    style="padding-right: 30px; padding-left: 10px; padding-top: 20px;"
                  >
                    <a-menu-item key="0">
                      <a href="#" class="font-weight-bold" style="color: #1C4798;">
                        Ade Adedamola
                        <img
                          src="../../assets/images/assignee-plus.svg"
                          style="float: right"
                          class="ml-4"
                          alt
                        />
                      </a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="#" class="font-weight-bold" style="color: #1C4798;">
                        John Tobiloba
                        <img
                          src="../../assets/images/assignee-plus.svg"
                          class
                          alt
                          style="float: right"
                        />
                      </a>
                    </a-menu-item>
                    <a-menu-item key="2">
                      <a href="#" class="font-weight-bold" style="color: #1C4798;">
                        Moses Bake
                        <img
                          src="../../assets/images/assignee-plus.svg"
                          class
                          alt
                          style="float: right"
                        />
                      </a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>

                <a-dropdown :trigger="['click']" placement="bottomCenter">
                  <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <button type="button" class="btn btn-label btn-sm mb-1">
                      <img src="../../assets/images/milestone-card.svg" class="mr-1" alt />
                      Milestone
                      <i class="fas fa-plus ml-4 labels-icon"></i>
                    </button>
                  </a>
                  <a-menu
                    slot="overlay"
                    style="padding-right: 30px; padding-left: 10px; padding-top: 20px;"
                  >
                    <a-menu-item key="0">
                      <a href="#" class="font-weight-bold" style="color: #1C4798;">
                        Perfect Login
                        <img
                          src="../../assets/images/milestone-flag.svg"
                          style="float: right"
                          class="ml-4"
                          alt
                        />
                      </a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="#" class="font-weight-bold" style="color: #1C4798;">
                        Onboarding
                        <img
                          src="../../assets/images/milestone-flag.svg"
                          class
                          alt
                          style="float: right"
                        />
                      </a>
                    </a-menu-item>
                    <a-menu-item key="2">
                      <a href="#" class="font-weight-bold" style="color: #1C4798;">
                        Front End
                        <img
                          src="../../assets/images/milestone-flag.svg"
                          class
                          alt
                          style="float: right"
                        />
                      </a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
                <button type="button" class="btn btn-label btn-sm mb-1">
                  <img src="../../assets/images/checklist.svg" class="mr-1" alt />
                  Check list
                  <i class="fas fa-plus ml-4 labels-icon"></i>
                </button>
                <button type="button" class="btn btn-label btn-sm mb-1">
                  <img src="../../assets/images/duedate.svg" class="mr-1" alt />
                  Due date
                  <i class="fas fa-plus ml-4 labels-icon"></i>
                </button>
                <button type="button" class="btn btn-label btn-sm mb-1">
                  <img src="../../assets/images/attachments.svg" class="mr-1" alt />
                  Attachments
                  <i class="fas fa-plus ml-3 labels-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </a-modal>&nbsp;
        <button type="button" class="btn btn2 btn-sm">
          New Component |
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-lg-3">
        <div class="interface user-interface text-left px-2">
          <h6>User interface</h6>
          <p class="repos mr-2">Repos</p>
          <p class="issues mr-2">Total issues: 167</p>
          <button type="button" class="btn btn3 btn-sm">
            New issue
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="interface database text-left px-2">
          <h6>Data Base</h6>
          <p class="repos mr-2">Repos</p>
          <p class="issues mr-2">Total issues: 23</p>
          <button type="button" class="btn btn3 btn-sm">
            New issue
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="interface design-experience text-left px-2">
          <h6>Design Experience</h6>
          <p class="repos mr-2">Repos</p>
          <p class="issues mr-2">Total issues: 3</p>
          <button type="button" class="btn btn3 btn-sm">
            New issue
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <div class="col-lg-3"></div>
    </div>

    <div class="box2 mt-2">
      <div class="row">
        <div class="col-lg-3">
          <div class="component text-left px-4 mb-2">
            <p class="text1 issues mb-1">
              New issues
              <img src="../../assets/images/new-issues.svg" class="responsive-img" alt />
            </p>
            <p class="text2 issues">New issues</p>
          </div>

          <div class="component text-left px-4 mb-2">
            <p class="text1 comments mb-1">
              2 comments
              <img src="../../assets/images/comments.svg" class="responsive-img" alt />
            </p>
            <div class="row">
              <div class="col-lg-11">
                <p class="text2 comments">Landing Page</p>
              </div>
              <div class="col-g-1">
                <a-dropdown :trigger="['click']" placement="bottomLeft">
                  <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <img src="../../assets/images/menu-comments.svg" class="responsive-img" alt />
                  </a>
                  <a-menu
                    slot="overlay"
                    style="padding-right: 30px; padding-left: 10px; padding-top: 20px;"
                  >
                    <a-menu-item key="0">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/pin-issue.svg" class="mr-2" alt /> Pin issue
                      </a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/select-issue.svg" class="mr-2" alt /> Select issues
                      </a>
                    </a-menu-item>
                    <a-menu-item key="2">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/close-issue.svg" class="mr-2" alt /> Close issue
                      </a>
                    </a-menu-item>
                    <a-menu-item key="3">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/move-up.svg" class="mr-2" alt /> Move up
                      </a>
                    </a-menu-item>
                    <a-menu-item key="4">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/move-down.svg" class="mr-2" alt /> Move down
                      </a>
                    </a-menu-item>

                    <a-menu-divider />
                    <a-menu-item key="4">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/assign-to.svg" class="mr-2" alt /> Assign to
                      </a>
                    </a-menu-item>
                    <a-menu-item key="4">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/apply-label.svg" class="mr-2" alt /> Apply label
                      </a>
                    </a-menu-item>
                    <a-menu-item key="4">
                      <a href="#" class="font-italic">
                        <img src="../../assets/images/set-milestone.svg" class="mr-2" alt /> Set milestone
                      </a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </div>
            </div>
            <hr style="margin-bottom:10px; margin-top:1px; " />
            <p class="comments-tag invalid">Invalid</p>
            <img
              src="../../assets/images/down-comments.svg"
              class="responsive-img"
              style="float:right;"
              alt
            />
          </div>
          <div class="component text-left px-4 mb-2">
            <p class="text1 comments mb-1">
              4 comments
              <img src="../../assets/images/comments.svg" class="responsive-img" alt />
            </p>
            <div class="row">
              <div class="col-lg-11">
                <p class="text2 comments">Employers DashB</p>
              </div>
              <div class="col-g-1">
                <a-dropdown :trigger="['click']" placement="bottomLeft">
                  <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <img src="../../assets/images/menu-comments.svg" class="responsive-img" alt />
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item key="0">
                      <a href="http://www.alipay.com/">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="http://www.taobao.com/">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="3">3rd menu item</a-menu-item>
                  </a-menu>
                </a-dropdown>
              </div>
            </div>

            <hr style="margin-bottom:10px; margin-top:1px; " />
            <p class="comments-tag rogue">Rogue</p>
            <img
              src="../../assets/images/down-comments.svg"
              class="responsive-img"
              style="float:right;"
              alt
            />
          </div>
          <div class="component text-left px-4 mb-2">
            <p class="text1 comments mb-1">
              0 comments
              <img src="../../assets/images/comments.svg" class="responsive-img" alt />
            </p>
            <div class="row">
              <div class="col-lg-11">
                <p class="text2 comments">Developers DashB</p>
              </div>
              <div class="col-g-1">
                <a-dropdown :trigger="['click']" placement="bottomLeft">
                  <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <img src="../../assets/images/menu-comments.svg" class="responsive-img" alt />
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item key="0">
                      <a href="http://www.alipay.com/">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="http://www.taobao.com/">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="3">3rd menu item</a-menu-item>
                  </a-menu>
                </a-dropdown>
              </div>
            </div>
            <hr style="margin-bottom:10px; margin-top:1px; " />
            <p class="comments-tag advance">Advance</p>
            <img
              src="../../assets/images/down-comments.svg"
              class="responsive-img"
              style="float:right;"
              alt
            />
          </div>
          <div class="component text-left px-4 mb-2">
            <p class="text1 comments mb-1">
              0 comments
              <img src="../../assets/images/comments.svg" class="responsive-img" alt />
            </p>
            <img
              src="../../assets/images/menu-comments.svg"
              class="responsive-img"
              style="float:right;"
              alt
            />
            <p class="text2 comments">Developers DashB</p>
            <hr style="margin-bottom:10px; margin-top:1px; " />
            <p class="comments-tag bug">Bug</p>
            <img
              src="../../assets/images/down-comments.svg"
              class="responsive-img"
              style="float:right;"
              alt
            />
          </div>
        </div>
        <div class="vl"></div>
        <div class="col-lg-3">
          <div class="component text-left px-4 mb-2">
            <p class="text1 issues mb-1">
              1 issue
              <img src="../../assets/images/new-issues.svg" class="responsive-img" alt />
            </p>
            <p class="text2 issues">Backlog</p>
          </div>
          <div class="component text-left px-4 mb-2">
            <p class="text1 comments mb-1">
              0 comments
              <img src="../../assets/images/comments.svg" class="responsive-img" alt />
            </p>
            <img
              src="../../assets/images/menu-comments.svg"
              class="responsive-img"
              style="float:right;"
              alt
            />
            <p class="text2 comments">Developers DashB</p>
            <hr style="margin-bottom:10px; margin-top:1px; " />
            <p class="comments-tag bug">Bug</p>
            <img
              src="../../assets/images/down-comments.svg"
              class="responsive-img"
              style="float:right;"
              alt
            />
          </div>
        </div>
        <div class="vl"></div>
        <div class="col-lg-3">
          <div class="component text-left px-4 mb-2">
            <p class="text1 issues mb-1">
              0 issue
              <img src="../../assets/images/new-issues.svg" class="responsive-img" alt />
            </p>
            <p class="text2 issues">In Progress</p>
          </div>
        </div>
        <div class="vl"></div>
        <div class="col-lg-3"></div>
      </div>
    </div>

    <div
      class="modal fade"
      v-if="showModal1"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  data: function() {
    return {
      newissuevisible: false,
      modalStyle:
        "background: #efefef; border: 1px solid #6f6f6f; border-radius: 5px;"
    };
  },
  methods: {
    showModalnewissue() {
      this.newissuevisible = true;
    },
    handleOk(e) {
      console.log(e);
      this.newissuevisible = false;
    }
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
.btn1 {
  background: #343a40;
  color: white;
  font-weight: bold;
}
.btn2 {
  background: #1c4798;
  color: white;
  font-weight: bold;
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

/* User interface */

.interface {
  border: 0.5px solid rgba(112, 112, 112, 0.45);
  border-radius: 13px;
}

.interface.user-interface {
  background-color: #1c4798;
}
.interface.user-interface h6 {
  color: white;
}

.interface.database h6 {
  color: #343a40;
}
.interface .design-experience h6 {
  color: #343a40;
}

.interface h6 {
  font-weight: bold;
  padding-top: 10px;
}

.interface .repos {
  color: #343a40;
  display: inline-block;
  font-size: 10px;
  background: #c0e4d7;
  padding: 6px;
  border-radius: 6px;
}

.interface .issues {
  color: white;
  display: inline-block;
  font-size: 10px;
}
.interface.user-interface .issues {
  color: white;
}

.interface.database .issues {
  color: #343a40;
}
.interface.design-experience .issues {
  color: #343a40;
}

.btn3 {
  background: #e9edf5;
  color: #1c4798;
  font-weight: bold;
  font-size: 11px;
  display: inline-block;
}

/* component */
.box2 {
  border: 1px solid rgba(112, 112, 112, 0.45);
  border-radius: 13px;
  padding: 10px;
}
.component {
  border: none;
  border-radius: 10px;
  background: white;
}
.text1 {
  font-size: 10px;
  padding-top: 4px;
}
.text2 {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 7px;
  padding-bottom: 5px;
}

.text1.issues {
  color: #1c4798;
}
.text1.comments {
  color: #979a9d;
}
.text2.issues {
  color: #1c4798;
}
.text2.comments {
  color: #343a40;
}

.comments-tag {
  color: white;
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 6px;
}
.comments-tag.invalid {
  background: #c3cb01;
}
.comments-tag.rogue {
  background: #01bbcb;
}
.comments-tag.advance {
  background: #b401cb;
}
.comments-tag.bug {
  background: #e20d0d;
}
.vl {
  border-left: 1px solid rgba(52, 58, 64, 0.35);
}

/* modal */
.btn-label {
  background: rgba(192, 228, 215, 0.45);
  border-radius: 7px;
  color: #1c4798;
  font-weight: bold;
  width: 170px;
}
.labels-icon {
  color: #1c4798;
}
</style>
