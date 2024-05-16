<script setup>
import { useRoute } from 'vue-router';
import GetGameData from '@/functions/getGameData';
import { computed, ref } from 'vue';
const route = useRoute();
const game = route.params.game;

const data = ref([]);


const get_gameData = computed(()=>{
    
    GetGameData(game).then(res => {
        console.log(res.default);
        data.value =res.default
    })
    return ""
});




</script>
<template>

    <div v-for="d in data">
        {{ d }}
    </div>
    {{ get_gameData }}
    
</template>