<template>
    <div>
        <!-- <div v-for="facturation in facturations" :key="facturation.id">
            <Facturation :facturation="facturation" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom de la prestation</td>
                    <td>Prix</td>
                    <td>Date de prestation</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="facturation in facturations" :key="facturation.id">
                    <td>{{ facturation.id }}</td>
                    <td>{{ facturation.nom_prestation }}</td>
                    <td>{{ facturation.prix }}</td>
                    <td>{{ facturation.prestation_date }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeFacturation(facturation.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-facturation/${facturation.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouvelle-facturation')" class="btn btn-primary">
                Add new facturation
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Facturation from "./Facturation.vue";
import useFacturation from "../../services/facturationServices";
import { useRouter } from "vue-router";

const { getFacturationList, deleteFacturation } = useFacturation();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des factures venant de la base de donnee
let facturations = ref([]);

const removeFacturation = (id) => {
    //Appel de la route de suppression d'un facturation (depuis express)
    deleteFacturation(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Facturation supprime");

            //Lecture de la liste complete depuis express
            getFacturationList()
                .then((res) => {
                    console.log("Les resultats", res);
                    facturations.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des facturations", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du facturation", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getFacturationList()
        .then((res) => {
            console.log("Les resultats", res);
            facturations.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des factures", err))
});
</script>

<style lang="scss" scoped>
</style>