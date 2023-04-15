<template>
    <div>
        <!-- <div v-for="utilisateur in utilisateurs" :key="utilisateur.id">
            <Utilisateur :utilisateur="utilisateur" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Nom d'utilisateur</td>
                    <td>Mot de passe</td>
                    <td>id du service</td>
                    <td>id du rendez-vous</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="utilisateur in utilisateurs" :key="utilisateur.id">
                    <td>{{ utilisateur.id }}</td>
                    <td>{{ utilisateur.nom }}</td>
                    <td>{{ utilisateur.prenom }}</td>
                    <td>{{ utilisateur.user_name }}</td>
                    <td>{{ utilisateur.password }}</td>
                    <td>{{ utilisateur.id_service}}</td>
                    <td>{{ utilisateur.id_rdv }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeUtilisateur(utilisateur.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-utilisateur/${utilisateur.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-utilisateur')" class="btn btn-primary">
                Add new utilisateur
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Utilisateur from "./Utilisateur.vue";
import useUtilisateur from "../../services/utilisateurServices";
import { useRouter } from "vue-router";

const { getUtilisateurList, deleteUtilisateur } = useUtilisateur();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let utilisateurs = ref([]);

const removeUtilisateur = (id) => {
    //Appel de la route de suppression d'un utilisateur (depuis express)
    deleteUtilisateur(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des utilisateurs pour raffraichir l'ecran
            console.log("Utilisateur supprime");

            //Lecture de la liste complete depuis express
            getUtilisateurList()
                .then((res) => {
                    console.log("Les resultats", res);
                    utilisateurs.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des utilisateurs", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du utilisateur", err)
        );
};

// Cette fonction permet de charger la liste desutilisateurs avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des utilisateurs depuis le backend (express)
    getUtilisateurList()
        .then((res) => {
            console.log("Les resultats", res);
            utilisateurs.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des utilisateurs", err))
});
</script>

<style lang="scss" scoped>
</style>