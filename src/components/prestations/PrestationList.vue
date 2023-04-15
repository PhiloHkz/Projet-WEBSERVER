<template>
    <div>
        <!-- <div v-for="prestation in prestations" :key="prestation.id">
            <Prestation :prestation="prestation" />
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
                <tr v-for="prestation in prestations" :key="prestation.id">
                    <td>{{ prestation.id }}</td>
                    <td>{{ prestation.nom_prestation }}</td>
                    <td>{{ prestation.prix }}</td>
                    <td>{{ prestation.prestation_date }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removePrestation(prestation.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-prestation/${prestation.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouvelle-prestation')" class="btn btn-primary">
                Add new prestation
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Prestation from "./Prestation.vue";
import usePrestation from "../../services/prestationServices";
import { useRouter } from "vue-router";

const { getPrestationList, deletePrestation } = usePrestation();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des factures venant de la base de donnee
let prestations = ref([]);

const removeFacturation = (id) => {
    //Appel de la route de suppression d'une prestation (depuis express)
    deletePrestation(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des prestations pour raffraichir l'ecran
            console.log("Prestations supprime");

            //Lecture de la liste complete depuis express
            getPrestationList()
                .then((res) => {
                    console.log("Les resultats", res);
                    prestations.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des prestations", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du prestation", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
   getPrestationList()
        .then((res) => {
            console.log("Les resultats", res);
            prestations.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des  prestations ", err))
});
</script>

<style lang="scss" scoped>
</style>