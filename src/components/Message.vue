<template>
    <v-card class="lighten-2 ma-2 pa-2 text-center" :class="answer">
        <h3>{{ message }}</h3>
        <v-divider></v-divider>
        <v-btn class="info" @click="continueBtn">Continue</v-btn>
    </v-card>
</template>
<script>
export default {
    methods: {
        continueBtn() {
            this.questDone < this.$store.getters.getQuestMax
                ? this.changeState('question')
                : this.changeState('result')
        },
    },
    computed: {
        message() {
            return this.$store.getters.getMessage
        },
        answer() {
            return this.$store.getters.getAnswer
        },
    },
}
</script>
