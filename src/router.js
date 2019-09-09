import Vue from 'vue'
import Router from 'vue-router'
import StartScreen from './components/StartScreen'
import Question from './components/Question'
import Message from './components/Message'
import ResultScreen from './components/ResultScreen'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            name: 'start',
            component: StartScreen,
        },
        {
            path: '/question',
            name: 'question',
            component: Question,
        },
        {
            path: '/message',
            name: 'message',
            component: Message,
        },
        {
            path: '/result',
            name: 'result',
            component: ResultScreen,
        },
    ],
})
