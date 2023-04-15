<template>
    <div>
        <p>Nom: {{ utilisateur.nom }}</p>
        <p>Prenom: {{ utilisateur.prenom }}</p>
        <p>Nom d'utilisateur: {{ utilisateur.user_name }}</p>
        <p>Mot de passe: {{ utilisateur.password }}</p>
        <p>id du service: {{ utilisateur.id_service }}</p>
        <p>id du rendez-vous: {{ utilisateur.id_rdv }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    utilisateur: {
        type: Object,
        default: () => ({
            nom: "",
            prenom: "",
            user_name: "",
            password: "",
            id_service: "",
            id_rdv: ""
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>