<script setup>
import Store from '@/assets/store.manager';
import { redirect } from '@/router/router';



const moveto =(id)=>{
    console.log(id);
    Store.save("API_NAME" , `COD-${id}`)
    console.log(Store.get("API_NAME"));
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