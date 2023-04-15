<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'une nouvelle facturation</h3>

            <form @submit.prevent="addNewFacturation">
                <div class="mb-3">
                    <label for="nom_prestation" class="form-label">Nom de la Prestation</label>
                    <input
                        v-model="facturation.nom_prestation"
                        type="text"
                        class="form-control"
                        id="nom_prestation"
                        placeholder="Entrer le nom de la prestation"
                    />
                </div>

                <div class="mb-3">
                    <label for="prix" class="form-label"
                        >Prix</label
                    >
                    <input
                        v-model="facturation.prix"
                        type="text"
                        class="form-control"
                        id="prix"
                        placeholder="Mettez le prix"
                    />
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label"
                        >Date de Prestation</label
                    >
                    <input
                        v-model="facturation.prestation_date"
                        type="date"
                        class="form-control"
                        id="date"
                        placeholder="Donner la date de prestation"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useFacturation from "../../services/facturationServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addFacturation } = useFacturation();
let facturation = ref({
    nom_prestation: "",
    prix: "",
    prestation_date: "",
});
function addNewFacturation() {
    //Appel de notre route dans le backend (express) pour ajouter une facturation
    addFacturation(facturation.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouvelle facture", res);
            //On va etre redirige vers la table des factures
            router.push("/");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>