<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="Site Name">Site name</label>
      <input type="text" v-model="siteName" />
    </div>
    <div>
      <label for="Site Description">Description</label>
      <input type="text" v-model="siteDesc" />
    </div>
    <div>
      <label for="Site URL">URL</label>
      <input type="text" v-model="siteUrl" />
    </div>
    <div>
      <button>Add Site</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-site"],
  data() {
    return {
      siteName: "",
      siteDesc: "",
      siteUrl: "",
    };
  },
  methods: {
    submitData() {
      if(this.siteName.trim() || this.siteDesc.trim() || this.siteUrl.trim()){
        this.$emit("add-site", this.siteName, this.siteDesc, this.siteUrl);
        this.siteName='',
        this.siteDesc='',
        this.siteUrl=''

      }
    },
  },
};
</script>
