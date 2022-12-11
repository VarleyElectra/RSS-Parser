<template>
    <v-main>
      <v-select
          label="Сортировка постов"
          rounded
          :items="['Более свежие', 'Более старые',]"
          variant="solo"
          v-model="store.selectedSort"
      ></v-select>

      <v-text-field
          label="Поиск слов в заголовке"
          variant="solo"
          v-model="store.searchQuery"
      ></v-text-field>

      <v-card
          class="mx-auto my-10 pa-3"
          max-width="800px"
          v-for="post in store.slicedPosts"
          :key="post.time"
      >
        <v-card-title class="card__title" @click="router.push({ path: '/post', query: {title: post.title} })">
          {{ post.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ post.announcement }}
        </v-card-subtitle>

        <v-card-subtitle>
          {{ post.date }} {{ post.time }}
        </v-card-subtitle>

        <v-card-actions v-if="post.fullText !== ' '">
          <v-btn
              color="#0028ed"
              variant="text"
              @click="post.showFullText = !post.showFullText"
          >
            Смотреть текст
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
              :icon="post.showFullText ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="post.showFullText = !post.showFullText"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="post.showFullText">
            <v-divider></v-divider>

            <v-card-text>
              {{ post.fullText }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

      <v-pagination
          v-model="store.pageNumber"
          :length="store.pagesCount"
          :total-visible="6"
          color="#4D88FE"
      ></v-pagination>
    </v-main>
</template>

<script setup>
import {useRouter} from "nuxt/app";
import {usePostsStore} from "~/stores/posts";

const store = usePostsStore();
const router = useRouter();
</script>

<style>
.card__title {
  cursor: pointer;
  transition: 0.5s;
}
.card__title:hover {
  color: #0028ed;
}
</style>