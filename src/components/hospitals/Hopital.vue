<template>
    <div>
        <p>Nom: {{ hopital.nom }}</p>
        <p>Adress: {{ hopital.adress }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    hopital: {
        type: Object,
        default: () => ({
            nom: "",
            adress:''
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>