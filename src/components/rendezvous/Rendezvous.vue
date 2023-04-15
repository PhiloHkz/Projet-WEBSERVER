<template>
    <div>
        
        <p>Type de rendez-vous: {{ rendezvous.type_rdv }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    rendezvous: {
        type: Object,
        default: () => ({
            
            type_rdv: "",
            
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>