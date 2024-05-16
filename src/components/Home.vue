<script setup>
import GAMES from "@/media/games.json"
import GameComponent from "./Home.Game.vue"

</script>


<template>

    <div class="text-center">
        <div v-for="game in GAMES">
        <GameComponent :game_info="game"></GameComponent>
    </div>
    </div>
</template>