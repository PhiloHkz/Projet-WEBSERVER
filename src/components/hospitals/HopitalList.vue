<template>
    <div>
        <!-- <div v-for="hopital in hopitals" :key="hopital.id">
            <Hopital :hopital="hopital" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom</td>
                    <td>Adress</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hopital in hopitals" :key="hopital.id">
                    <td>{{ hopital.id }}</td>
                    <td>{{ hopital.nom }}</td>
                    <td>{{ hopital.adress }}</td>
                    <td></td>
                    <td>
                        <button class="btn btn-danger" @click="removeHopital(hopital.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-hopital/${hopital.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-hopital')" class="btn btn-primary">
                Add new hopital
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Hopital from "./Hopital.vue";
import useHopital from "../../services/hopitalServices";
import { useRouter } from "vue-router";

const { getHospitalList, deleteHospital } = useHopital();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let hopitals = ref([]);

const removeHopital = (id) => {
    //Appel de la route de suppression d'un Hopital (depuis express)
    deleteHospital(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des hopitals pour raffraichir l'ecran
            console.log("Hopital supprime");

            //Lecture de la liste complete depuis express
           getHospitalList()
                .then((res) => {
                    console.log("Les resultats", res);
                    hopitals.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des hopitals", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression de l' hopital", err)
        );
};

// Cette fonction permet de charger la liste des hopitals avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des hopitals depuis le backend (express)
    getHospitalList()
        .then((res) => {
            console.log("Les resultats", res);
            hopitals.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des hopitals", err))
});
</script>

<style lang="scss" scoped>
</style>