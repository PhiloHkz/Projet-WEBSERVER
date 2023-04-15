<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'une nouvelle prestation</h3>

            <form @submit.prevent="addNewPrestation">
                <div class="mb-3">
                    <label for="nom_prestation" class="form-label">Nom de la Prestation</label>
                    <input
                        v-model="prestation.nom_prestation"
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
                        v-model="prestation.prix"
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
                        v-model="prestation.prestation_date"
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
import usePrestation from "../../services/prestationServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addPrestation } = usePrestation();
let prestation = ref({
    nom_prestation: "",
    prix: "",
    prestation_date: "",
});
function addNewPrestation() {
    //Appel de notre route dans le backend (express) pour ajouter une prestation
    addPrestation(prestation.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouvelle prestation", res);
            //On va etre redirige vers la table des factures
            router.push("/");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>