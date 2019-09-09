<template>
    <v-app>
        <v-card class="mx-auto" width="700px">
            <v-card-title>Math Training. Level {{ level + 1 }}</v-card-title>
            <v-divider></v-divider>
            <v-progress-linear
                :value="progressBar"
                background-color="white"
                color="blue"
                class="v-progress-training"
                height="10"
            ></v-progress-linear>
            <v-card-text>
                <transition name="flip" mode="out-in">
                    <start-screen v-if="getState === 'start'"></start-screen>
                    <question v-else-if="getState === 'question'"></question>
                    <message v-else-if="getState === 'message'"></message>
                    <result-screen v-else-if="getState === 'result'"></result-screen>
                    <div v-else>Unknown State</div>
                </transition>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
import StartScreen from './components/StartScreen'
import Question from './components/Question'
import Message from './components/Message'
import ResultScreen from './components/ResultScreen'

export default {
    name: 'App',
    components: {
        StartScreen,
        Question,
        Message,
        ResultScreen,
    },
    data: () => ({
        //
    }),
    computed: {
        getState() {
            return this.$store.getters.getAppState
        },
        questMax() {
            return this.$store.getters.getQuestMax
        },
        progressBar() {
            return (this.questDone / this.questMax) * 100
        },
    },
}
</script>

<style>
.v-application--wrap {
    min-height: 0px !important;
}
h3,
.success,
.info {
    margin: 30px 0 !important;
}
.flip-enter-active {
    animation: flipInX 0.3s linear;
}
.flip-leave-active {
    animation: flipOutX 0.3s linear;
}
.v-progress-training {
    transition: width 0.5s;
}

@keyframes flipInX {
    from {
        transform: rotateX(90deg);
    }
    to {
        transform: rotateX(0deg);
    }
}
@keyframes flipOutX {
    from {
        transform: rotateX(0deg);
    }
    to {
        transform: rotateX(90deg);
    }
}
</style>
