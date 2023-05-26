<template>
  <div class="comment">
    <div style="float: left" class="left">
      <div style="width: 42px; height: 42px; margin-right: 8px" class="avatar">
        <img
          style="width: 100%; height: 100%; border-radius: 50%; border: 2px solid rgba(0, 0, 0, 0.1)"
          :src="commentedBy.avatar"
        />
      </div>
    </div>
    <div style="margin-left: 45px" class="comment-body">
      <div class="comment-header">
        <div style="max-width: calc(100% - 10px)" class="tag">
          <div style="margin: 0px 0px 2px" class="top">
            <div class="user">
              <router-link
                style="
                  overflow-wrap: break-word;
                  text-decoration: none;
                  color: var(--color-active) !important;
                  font-weight: 600;
                "
                :to="'/user/' + commentedBy._id"
              >
                {{ commentedBy.username }}
              </router-link>
            </div>
          </div>
          <div
            style="
              display: flex;
              -webkit-box-align: center;
              align-items: center;
            "
            class="fac"
          >
            <div
              style="
                border-radius: 18px;
                background-color: var(--box-background);
                color: var(--box-color);
                box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
                padding: 5px 10px;
                max-width: 100%;
              "
              class="content-comment"
            >
              <div style="overflow: hidden; display: block" class="trim">
                {{ comment }}
              </div>
            </div>
          </div>

          <div class="comment-options"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {};
  },
  props: {
    _id: String,
    commentedBy: Object,
    comment: String,
    createdAt: Date,
    updatedAt: Date,
  },
};
</script>
<style scoped>
.comment {
  width: 100%;
  padding: 8px 0;
  box-sizing: border-box;
}
.trim {
  word-break: break-all;
}
</style>