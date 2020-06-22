<template>
  <div class="admin">
    <div class="nav-title">
      <h2 class="page-title">时间线</h2>
      <v-divider></v-divider>
    </div>
    <div class="container">
      <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="n in 12"
          color="red lighten-2"
          :key="n"
        >
          <span slot="opposite">Tus eu perfecto</span>
          <v-card class="elevation-2">
            <v-card-title class="headline">Lorem ipsum</v-card-title>
            <div class="meta-box">
                        <span class="date">
                          <v-icon small>mdi-calendar-month-outline</v-icon>
                          <span>对你撒娇的</span>
                        </span>
            </div>
            <v-card-text>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    reverse: true,
  }),
}
</script>
<style scoped lang="scss">
@import "../../style/Admin";
.admin{
  @include Admin;
}
.meta-box {
  font-size: 12px;
  color: #757575;
  padding: 0 16px;
  display: flex;
  margin-bottom: 10px;
  align-content: center;

  .date {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }
}
</style>
