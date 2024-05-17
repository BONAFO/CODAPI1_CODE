<script setup>
import GetGameData from '@/functions/getGameData';
import { computed, ref } from 'vue';
import { redirect } from '@/router/router';
import  GET_PARAMS from "@/assets/getParams"
import BackButton from './BackButton.vue';
import Store from '@/assets/store.manager';

const game = GET_PARAMS().game;






const data = ref([]);


const get_gameData = computed(()=>{
    
    GetGameData(game).then(res => {
        console.log(res.default);
        data.value =res.default
    })
    return ""
});

const weapon_class = (wc)=>{
    redirect(`${game}/${wc}`);
};

console.log(Store.store.getters.getAPI_NAME);

</script>
<template>
    <BackButton ></BackButton>


    <div v-for="d in data">
        <div class=" mt-5">
            <div @click="weapon_class(d.name)" id="wp-cont" class="text-center">
            <img id="wp-img" class="w-50 "  :src="d.img" alt="">
            <h3 id="wp-name" class="cod-font">{{ d.name }}</h3>
        </div>
        </div>
    </div>
    {{ get_gameData }}
    




</template>

<style>
    #wp-cont{
        width: 100% !important;
    }

    #wp-img{
        height: 20vh;
        border-radius: 20%;
    }

    #wp-name{
        color: #fff987;
    }
</style>