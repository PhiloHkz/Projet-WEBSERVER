<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau utilisateur</h3>

            <form @submit.prevent="addNewUtilisateur">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input
                        v-model="utilisateur.nom"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom"
                    />
                </div>

                <div class="mb-3">
                    <label for="prenom" class="form-label"
                        >Prenom</label
                    >
                    <input
                        v-model="utilisateur.prenom"
                        type="text"
                        class="form-control"
                        id="prenom"
                        placeholder="Donner un prenom"
                    />
                </div>
                <div class="mb-3">
                    <label for="user_name" class="form-label"
                        >Nom d'utilisateur</label
                    >
                    <input
                        v-model="utilisateur.user_name"
                        type="text"
                        class="form-control"
                        id="user_name"
                        placeholder="Donner un nom d'utilisateur"
                    />
                </div>
                 <div class="mb-3">
                    <label for="password" class="form-label"
                        >Mot de passe</label
                    >
                    <input
                        v-model="utilisateur.password"
                        type="text"
                        class="form-control"
                        id="password"
                        placeholder="Donner un mot de passe"
                    />
                </div>
                 <div class="mb-3">
                    <label for="id_service" class="form-label"
                        >id du service</label
                    >
                    <input
                        v-model="utilisateur.id_service"
                        type="text"
                        class="form-control"
                        id="id_service"
                        placeholder="Donner un id_service"
                    />
                </div>
                 <div class="mb-3">
                    <label for="id_rdv" class="form-label"
                        >id du rendez-vous</label
                    >
                    <input
                        v-model="utilisateur.id_rdv"
                        type="text"
                        class="form-control"
                        id="id_rdv"
                        placeholder="Donner un id du rendez-vous"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useUtilisateur from "../../services/utilisateurServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addUtilisateur } = useUtilisateur();
let utilisateur = ref({
    nom: "",
    prenom: "",
    user_name: "",
    password: "",
    id_service: "",
    id_rdv: "",

});
function addNewUtilisateur() {
    //Appel de notre route dans le backend (express) pour ajouter un utilisateur
    addUtilisateur(utilisateur.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau utilisateur", res);
            //On va etre redirige vers la table des utilisateurs
            router.push("/");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>