<template>
  <div class="container-600 text-center">
    <h1 class="text-large font-600 mr-3">Title</h1>
    <div class="box-content">
      <div class="sub-title my-2 text-sm text-gray-600">
        list suggestions when activated
      </div>
      <el-autocomplete
        clearable
        class="inline-input w-50"
        placeholder="Please Input"
      />
    </div>

    <div class="box-content">
      <div class="sub-title my-2 text-sm text-gray-600">
        list suggestions when activated
      </div>
      <el-autocomplete
        clearable
        class="inline-input w-50"
        placeholder="Please Input"
      />
    </div>

    <el-row class="mb-1">
      <el-button type="primary w-100">Primary</el-button>
    </el-row>

    <h1 class="text-large font-600 mr-3">Title</h1>

    <el-row class="mb-1">
      <el-button type="primary w-100">Primary</el-button>
    </el-row>
  </div>
</template>

<style scoped>
.container-600 {
  width: 600px;
  margin: 0px auto;
  border: 1px solid red;
  padding: 20px;
}
.w-100 {
  width: 100%;
}

.box-content {
  margin-bottom: 1rem;
  width: 100%;
}

.mb-1 {
  margin-bottom: 1rem;
}
</style>
