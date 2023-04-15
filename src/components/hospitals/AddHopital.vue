<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau hopital</h3>

            <form @submit.prevent="addNewHopital">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input
                        v-model="hopital.nom"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom de l'hopital"
                    />
                </div>

                <div class="mb-3">
                    <label for="adress" class="form-label"
                        >Adress</label
                    >
                    <input
                        v-model="hopital.adress"
                        type="text"
                        class="form-control"
                        id="adress"
                        placeholder="Donner une adress"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useHopital from "../../services/hopitalServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addHopital } = useHopital();
let hopital = ref({
    nom: "",
    adress: "",
    
});
function addNewDepartment() {
    //Appel de notre route dans le backend (express) pour ajouter un hopital
    addHopital(hopital.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau hopital", res);
            //On va etre redirige vers la table des hopitaux
            router.push("/");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>