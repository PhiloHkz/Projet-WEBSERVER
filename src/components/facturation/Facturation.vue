<template>
    <div>
        <p>Nom de la prestation: {{ facturation.nom_prestation }}</p>
        <p>Date de prestation: {{ facturation.prestation_date }}</p>
        <p>Prix: {{ facturation.prix }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    facturation: {
        type: Object,
        default: () => ({
            nom_prestation: "",
            prestation_date: "",
            prix:''
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>