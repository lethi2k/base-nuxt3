<template>
  <el-row class="header-page">
    <el-col class="icon" :span="3">
      <el-icon>
        <Back />
      </el-icon>
    </el-col>
    <el-col class="title" :span="21"> 検索結果 </el-col>
  </el-row>
  <el-row class="page-content">
    <el-col class="filter-work" :span="24">
      <h3 class="title">4件の店舗があります</h3>
      <el-select v-model="value" placeholder="検索条件を確認する">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row justify="space-between" class="card-product">
    <el-col v-for="o in 4" :key="o" :span="11" class="colum-product">
      <el-card :body-style="{ padding: '0px' }">
        <img src="~/assets/images/product.png" class="image" />
        <div class="content">
          <span class="title">下北沢 by エー・ディー・ワークス</span>
          <div class="bottom d-flex">
            <div class="flex-grow-1">
              <div class="align-items-center description">
                <Location style="width: 1em; height: 1em; margin-right: 8px" />
                <span>下北沢駅 徒歩3分</span>
              </div>

              <div class="align-items-center description">
                <Clock style="width: 1em; height: 1em; margin-right: 8px" />
                <span>10:00 - 22:00</span>
              </div>

              <div class="align-items-center">
                <Money style="width: 1em; height: 1em; margin-right: 8px" />
                <span>¥660 〜 3,300</span>
              </div>
            </div>

            <div class="flex-shrink-0">
              地図で見る
              <!-- <el-button plain>
                <el-icon>
                  <Location />
                </el-icon>
                
              </el-button> -->
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <br /><br />
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
import {
  ElIcon,
  ElRow,
  ElCol,
  ElButton,
  ElCheckbox,
  ElSelect,
  ElOption,
  ElCard,
} from "element-plus";
import { Back } from "@element-plus/icons-vue";
import {
  Plus,
  CloseBold,
  Location,
  Clock,
  Money,
} from "@element-plus/icons-vue";
const input = ref("");
const value = ref("");
const options = [
  {
    value: "検索条件を確認する",
    label: "検索条件を確認する",
  },
];
</script>
  
