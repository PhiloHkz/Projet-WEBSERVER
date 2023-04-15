<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un utilisateur</h3>

            <form @submit.prevent="updateAUtilisateur">
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
                        id="utilisateur"
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
import { onBeforeMount, ref } from "vue";
import useUtilisateur from "../../services/utilisateurServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du utilisateur que l'on doit mettre a jour
const id = route.params.id;

const { updateUtilisateur, getUtilisateurById } = useUtilisateur();
let utilisateur = ref({
    nom: "",
    prenom: "",
    user_name: "",
    password: "",
    id_service: "",
    id_rdv: ""

});

function updateAUtilisateur() {
    updateUtilisateur(utilisateur.value)
        .then((res) => {
            console.log("Utilisateur mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour du utilisateur", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du utilisateur avant l'affichage a l'ecran
    if (id) {
        getUtilisateurById(id)
            .then((res) => {utilisateur.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de l'utilisateur", err))
    }
})
</script>

<style lang="scss" scoped>
</style>