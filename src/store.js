import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appState: 'start',
        message: '',
        answer: '',
        questMax: 3,
        stats: {
            success: 0,
            error: 0,
        },
        level: 0,
        levels: [
            {
                variants: 2,
                from: 10,
                to: 40,
                range: 5,
            },
            {
                variants: 4,
                from: 100,
                to: 200,
                range: 20,
            },
            {
                variants: 6,
                from: 500,
                to: 900,
                range: 40,
            },
        ],
    },
    mutations: {
        setAppState(state, payload) {
            state.appState = payload
        },
        setMessage(state, payload) {
            state.message = payload
        },
        setAnswer(state, payload) {
            state.answer = payload
        },
        setQuestMax(state, payload) {
            state.questMax = payload
        },
        setStatsSuccess(state) {
            state.stats.success++
        },
        setStatsError(state) {
            state.stats.error++
        },
        setStatsClear(state) {
            state.stats.success = 0
            state.stats.error = 0
        },
        setLevel(state) {
            state.level++
        },
        setLevelStart(state) {
            state.level = 0
        },
    },
    actions: {
        setAppState({ commit }, payload) {
            commit('setAppState', payload)
        },
        setMessage({ commit }, payload) {
            commit('setMessage', payload)
        },
        setAnswer({ commit }, payload) {
            commit('setAnswer', payload)
        },
        setQuestMax({ commit }, payload) {
            commit('setQuestMax', payload)
        },
        setStatsSuccess({ commit }) {
            commit('setStatsSuccess')
        },
        setStatsError({ commit }) {
            commit('setStatsError')
        },
        setStatsClear({ commit }) {
            commit('setStatsClear')
        },
        setLevel({ commit }) {
            commit('setLevel')
        },
        setLevelStart({ commit }) {
            commit('setLevelStart')
        },
    },
    getters: {
        getAppState(state) {
            return state.appState
        },
        getMessage(state) {
            return state.message
        },
        getAnswer(state) {
            return state.answer
        },
        getStats(state) {
            return state.stats
        },
        getQuestMax(state) {
            return state.questMax
        },
        getLevel(state) {
            return state.level
        },
        getLevels(state) {
            return state.levels
        },
    },
})
