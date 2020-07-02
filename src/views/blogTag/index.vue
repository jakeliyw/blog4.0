<template>
  <div>
    <header-title :title="title"/>
    <br>
    <v-card
      class="mx-auto"
      max-width="1640"
    >

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <span class="subheading">所有标签：</span>

        <v-chip-group
          v-model="selection"
          active-class="deep-purple--text text--accent-4"
          mandatory
        >
          <v-chip>Extra Soft</v-chip>
          <v-chip>Soft</v-chip>
          <v-chip>Medium</v-chip>
          <v-chip>Hard</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
    <br>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
        >
          <v-card
            subtitle
            :elevation="hover ? 16 : 2"
            class="mx-auto"
            max-width="799.5"
          >
            <v-card-title class="headline mb-1 " ></v-card-title>
            <div class="meta-box">
                        <span class="date">
                          <v-icon small class="con-yanjing">mdi-calendar-month-outline</v-icon>
                          <span></span>
                        </span>
              <span class="author">
                          <v-icon small class="con-yanjing">mdi-face-outline</v-icon>
                          <span></span>
                        </span>
              <span class="watch">
                  <v-icon small class="con-yanjing">mdi-eye-outline</v-icon>
                  <span></span>
        </span>
            </div>
            <div class="content">
              <v-btn depressed x-small color="success">阅读全文</v-btn>
            </div>
            <v-card-actions>
              <v-btn class="pr-0" text icon color="blue-grey lighten-2">
                <v-icon small>mdi-tag-multiple
                </v-icon>
              </v-btn>
              <div class="underline">css</div>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
        >
          <v-card
            subtitle
            :elevation="hover ? 16 : 2"
            class="mx-auto"
            max-width="799.5"
          >
            <v-card-title class="headline mb-1 " ></v-card-title>
            <div class="meta-box">
                        <span class="date">
                          <v-icon small class="con-yanjing">mdi-calendar-month-outline</v-icon>
                          <span></span>
                        </span>
              <span class="author">
                          <v-icon small class="con-yanjing">mdi-face-outline</v-icon>
                          <span></span>
                        </span>
              <span class="watch">
                  <v-icon small class="con-yanjing">mdi-eye-outline</v-icon>
                  <span></span>
        </span>
            </div>
            <div class="content">
              <v-btn depressed x-small color="success">阅读全文</v-btn>
            </div>
            <v-card-actions>
              <v-btn class="pr-0" text icon color="blue-grey lighten-2">
                <v-icon small>mdi-tag-multiple
                </v-icon>
              </v-btn>
              <div class="underline">css</div>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
        >
          <v-card
            subtitle
            :elevation="hover ? 16 : 2"
            class="mx-auto"
            max-width="799.5"
          >
            <v-card-title class="headline mb-1 " ></v-card-title>
            <div class="meta-box">
                        <span class="date">
                          <v-icon small class="con-yanjing">mdi-calendar-month-outline</v-icon>
                          <span></span>
                        </span>
              <span class="author">
                          <v-icon small class="con-yanjing">mdi-face-outline</v-icon>
                          <span></span>
                        </span>
              <span class="watch">
                  <v-icon small class="con-yanjing">mdi-eye-outline</v-icon>
                  <span></span>
        </span>
            </div>
            <div class="content">
              <v-btn depressed x-small color="success">阅读全文</v-btn>
            </div>
            <v-card-actions>
              <v-btn class="pr-0" text icon color="blue-grey lighten-2">
                <v-icon small>mdi-tag-multiple
                </v-icon>
              </v-btn>
              <div class="underline">css</div>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>

    </v-row>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'blogTag',
  components: {
    HeaderTitle,
  },
  data: () => ({
    title: '标签页',
    selection: 2,
  }),
}
</script>

<style scoped lang="scss">
hr {
  display: none;
}
</style>
