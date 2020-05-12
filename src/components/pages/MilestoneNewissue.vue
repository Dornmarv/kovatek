<template>
  <div>
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">JB Finance</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Milestone</li>
        <li class="breadcrumb-item active" aria-current="page">New issue</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-lg-9">
        <div class="box">
          <MilestoneNewissuelayout page="Create new issue" />
        </div>
      </div>
      <div class="col-lg-3">
        <div class="text-left">
          <button type="button" class="btn btn-label btn-sm mb-2">
            <img src="../../assets/images/labels.svg" class="mr-1" alt />
            Labels
            <i class="fas fa-plus ml-5 labels-icon"></i>
            <small style="float:left; color: #343A40;" class="mt-1 ml-1 font-italic">No labels yet</small>
          </button>
          <button type="button" class="btn btn-label btn-sm mb-2">
            <img src="../../assets/images/assignees.svg" class="mr-1" alt />
            Assignees
            <i class="fas fa-plus ml-4 labels-icon"></i>
            <small style="float:left; color: #343A40;" class="mt-1 ml-1 font-italic">Nobody</small>
          </button>
          <button type="button" class="btn btn-label btn-sm mb-2">
            <img src="../../assets/images/milestone-card.svg" class="mr-1" alt />
            Milestone
            <i class="fas fa-plus ml-4 labels-icon"></i>
            <small style="float:left; color: #343A40;" class="mt-1 ml-1 font-italic">No milestone</small>
          </button>
          <button type="button" class="btn btn-label btn-sm mb-2">
            <img src="../../assets/images/members-card.svg" class="mr-1" alt />
            Members
            <i class="fas fa-plus ml-4 labels-icon"></i>
            <small style="float:left; color: #343A40;" class="mt-1 ml-1 font-italic">No members</small>
          </button>
          <button type="button" class="btn btn-label btn-sm mb-2">
            <img src="../../assets/images/checklist.svg" class="mr-1" alt />
            Check list
            <i class="fas fa-plus ml-4 labels-icon"></i>
            <small style="float:left; color: #343A40;" class="mt-1 ml-1 font-italic">No labels yet</small>
          </button>
          <button type="button" class="btn btn-label btn-sm mb-2">
            <img src="../../assets/images/duedate.svg" class="mr-1" alt />
            Due date
            <i class="fas fa-plus ml-4 labels-icon"></i>
            <small style="float:left; color: #343A40;" class="mt-1 ml-1 font-italic">Nobody</small>
          </button>
          <button type="button" class="btn btn-label btn-sm mb-2">
            <img src="../../assets/images/attachments.svg" class="mr-1" alt />
            Attachments
            <i class="fas fa-plus ml-3 labels-icon"></i>
            <small style="float:left; color: #343A40;" class="mt-1 ml-1 font-italic">No milestone</small>
          </button>
          <button type="button" class="btn btn-label btn-sm mb-2">
            <img src="../../assets/images/cover.svg" class="mr-1" alt />
            Cover
            <i class="fas fa-plus ml-5 labels-icon"></i>
            <small style="float:left; color: #343A40;" class="mt-1 ml-1 font-italic">No members</small>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MilestoneNewissuelayout from "../layouts/MilestoneNewissuelayout";

export default {
  name: "MilestoneNewissue",
  components: {
    MilestoneNewissuelayout
  }
};
</script>

<style scoped>
.box {
  background: rgba(239, 239, 239, 0.45);
  border: 1px solid rgba(112, 112, 112, 0.45);
  border-radius: 13px;
  padding: 30px;
}
.breadcrumb {
  background: none;
}

.breadcrumb-item a {
  color: #1c4798;
  font-weight: bold;
  font-size: 15px;
}

.breadcrumb-item.active {
  color: #979a9d;
  font-weight: bold;
  font-size: 15px;
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: ">" !important;
}
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
