<template>
<v-main>
  <v-container class="post-container">
    <v-row class="ma-2 elevation-5">
      <v-col>
        <v-sheet class="pa-5">
          <h3>Заголовок</h3>
          {{postByTitle.title}}
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="ma-2 elevation-5">
      <v-col cols="4">
        <v-sheet class="pa-5">
          <h3>Дата публикации</h3>
          {{ postByTitle.date }} {{ postByTitle.time }}
        </v-sheet>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" v-if="postByTitle.author">
        <v-sheet class="pa-5">
          <h3>Автор</h3>
          {{ postByTitle.author }}
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="ma-2 elevation-5" v-if="postByTitle.announcement">
      <v-col>
        <v-sheet class="pa-5">
          <h3>Анонс</h3>
          {{postByTitle.announcement}}
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="ma-2 elevation-5" v-if="postByTitle.fullText !== ' '">
      <v-col>
        <v-sheet class="pa-5">
          <h3>Текст</h3>
          {{postByTitle.fullText}}
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="ma-2 pa-5 elevation-5">
      <h3>Фото</h3>
      <v-carousel
          v-if="postByTitle.imageUrls.length > 0"
          :hide-delimiters="postByTitle.imageUrls.length <= 1"
          :show-arrows="postByTitle.imageUrls.length > 1"
          class="carousel"
      >
        <v-dialog
            v-for="(imageUrl, index) in postByTitle.imageUrls"
            :key="imageUrl"
            v-model="modelValuesForImages[index]"
        >
          <template v-slot:activator="{ props }">
            <v-carousel-item
                :src="imageUrl"
                @click="modelValuesForImages[index] = true"
                cover
            ></v-carousel-item>
          </template>
          <v-img
              @click="modelValuesForImages[index] = false"
              :src="imageUrl"
              cover
          ></v-img>
        </v-dialog>
      </v-carousel>
    </v-row>
    <v-row class="ma-2 elevation-5" v-if="postByTitle.link">
      <v-col>
        <v-sheet class="pa-5">
          <h3>Источник</h3>
          <NuxtLink
              :to="postByTitle.link"
              target="_blank"
          >
            {{postByTitle.link}}
          </NuxtLink>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script setup>
import {useRoute} from "nuxt/app";
import { usePostsStore } from "~/stores/posts";

const store = usePostsStore();
const route = useRoute();

const postByTitle = store.getPostByTitle(route.query.title);

const modelValuesForImages = ref([]);
modelValuesForImages.value = postByTitle.imageUrls.map(() => ref(false))
</script>

<style scoped>
.post-container {
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}
.carousel {
  cursor: pointer;
}
</style>