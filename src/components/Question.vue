<template>
    <v-card class="grey lighten-2 ma-2 pa-2 text-center">
        <h3>{{ x }} + {{ y }} = ?</h3>
        <v-divider></v-divider>
        <div class="d-flex justify-space-around">
            <v-btn
                class="success"
                v-for="(number, i) of answers"
                :key="i"
                @click="onAnswer(number)"
            >
                {{ number }}
            </v-btn>
        </div>
    </v-card>
</template>
<script>
export default {
    methods: {
        onAnswer(num) {
            if (num == this.good) {
                this.$store.dispatch('setAnswer', 'success')
                this.$store.dispatch('setMessage', 'Good Job!')
                this.$store.dispatch('setStatsSuccess')
                this.changeState('message')
            } else {
                this.$store.dispatch('setAnswer', 'error')
                this.$store.dispatch('setMessage', `${this.x} + ${this.y} = ${this.good}!`)
                this.$store.dispatch('setStatsError')
                this.changeState('message')
            }
        },
    },
    computed: {
        answers() {
            let res = [this.good]
            while (res.length < this.levels.variants) {
                let num = mtRand(this.good - this.levels.range, this.good + this.levels.range)
                if (!res.includes(num)) {
                    res.push(num)
                }
            }
            return res.sort(() => Math.random() > 0.5)
        },
        good() {
            return this.x + this.y
        },
        levels() {
            return this.$store.getters.getLevels[this.level]
        },
        x() {
            return mtRand(this.levels.from, this.levels.to)
        },
        y() {
            return mtRand(this.levels.from, this.levels.to)
        },
    },
}

function mtRand(min, max) {
    let diff = max - min
    return Math.floor(Math.random() * (diff + 1)) + min
}
</script>

<style scoped></style>
