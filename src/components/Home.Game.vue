<script setup>
import { redirect } from '@/router/router';



const moveto =(id)=>{
    redirect(id)
}

const props = defineProps({
    game_info : Object
});


</script>
<template>

    <div class="mt-4"   >
        <img class="logo-game" @click="moveto(game_info.id)" :src="game_info.img" alt="">
    </div>
</template>

<style>
.logo-game{
    width: 50%;
    height: 25vh;
    border-radius: 50%;
}
</style>