<template>
  <v-app>
    <v-app-bar color="#00a0ed" class="app-bar__title" @click="router.push('/')">
      <v-toolbar-title>RSS Лента сайта RBC.ru</v-toolbar-title>
    </v-app-bar>
    <NuxtPage></NuxtPage>
  </v-app>
</template>


<script setup>
import {useRouter} from "nuxt/app";
import {usePostsStore} from "~/stores/posts";
import {
  parsePosts,
  proxyFetch
} from "~/utils/postsUtils";

const router = useRouter();
const store = usePostsStore();

const FEED_URL = 'http://static.feed.rbc.ru/rbc/logical/footer/news.rss';

let responseText = await proxyFetch(FEED_URL);

let xmlToDOMString = new window.DOMParser().parseFromString(responseText, "text/xml");

const posts = Array.from(xmlToDOMString.getElementsByTagName('item'));
const parsedPosts = parsePosts(posts);

store.posts = parsedPosts;
</script>

<style>
.app-bar__title {
  cursor: pointer;
}
</style>
