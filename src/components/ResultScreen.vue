<template>
    <v-card class="lighten-2 ma-2 pa-2 text-center">
        <h3>Success: {{ getSuccess }} Errors: {{ getErrors }}</h3>
        <v-divider></v-divider>
        <v-btn class="info mr-2" @click="repeat">Repeat</v-btn>
        <v-btn v-if="discharge" class="info" @click="nextLevel">Next Level</v-btn>
        <v-btn v-else class="info" @click="onDischarge">Discharge</v-btn>
    </v-card>
</template>
<script>
export default {
    computed: {
        getSuccess() {
            return this.$store.getters.getStats.success
        },
        getErrors() {
            return this.$store.getters.getStats.error
        },
        levels() {
            return this.$store.getters.getLevels
        },
        discharge() {
            return this.levels[this.level + 1]
        },
    },
    methods: {
        repeat() {
            this.$store.dispatch('setStatsClear')
            this.changeState('question')
        },
        nextLevel() {
            this.$store.dispatch('setLevel')
            this.repeat()
        },
        onDischarge() {
            this.$store.dispatch('setLevelStart')
            this.repeat()
        },
    },
}
</script>
