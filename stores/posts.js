import { defineStore } from 'pinia'

export const usePostsStore = defineStore({
    id: 'posts-store',
    state: () => {
        return {
            pageNumber: 1,
            postsLimit: 5,
            posts: [],
            selectedSort: 'Более свежие',
            searchQuery: '',

        }
    },
    actions: {},
    getters: {
        getPostByTitle: state => {
            return postTitle => state.posts.filter(post => post.title === postTitle)[0]
        },
        sortedPosts(state) {
            switch (state.selectedSort) {
                case 'Более старые':
                    return [...state.posts].sort((post1, post2) =>
                        new Date(`${post1.date} ${post1.time}`) - new Date(`${post2.date} ${post2.time}`))
                case 'Более свежие':
                    return [...state.posts].sort((post1, post2) =>
                        new Date(`${post2.date} ${post2.time}`) - new Date(`${post1.date} ${post1.time}`))
            }
        },
        sortedAndSearchedPosts(state) {
            state.pageNumber = 1;
            return state.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
        slicedPosts(state) {
            return state.sortedAndSearchedPosts.slice((state.pageNumber - 1) * 5, state.postsLimit * state.pageNumber)
        },
        pagesCount(state) {
            return Math.ceil(state.sortedAndSearchedPosts.length / state.postsLimit)
        }
    },
})