<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'une prestation</h3>

            <form @submit.prevent="updateAPrestation">
                <div class="mb-3">
                    <label for="nom_prestation" class="form-label">Nom de la prestation</label>
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
                        placeholder="Entrez le prix"
                    />
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label"
                        >Date de presation</label
                    >
                    <input
                        v-model="prestation.prestation_date"
                        type="date"
                        class="form-control"
                        id="date"
                        placeholder="Donner la date de la prestation"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import usePrestation from "../../services/prestationServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id de la prestation que l'on doit mettre a jour
const id = route.params.id;

const {  updatePrestation, getPrestationById } = usePrestation();
let prestation = ref({
    nom_prestation: "",
    prix: "",
    prestation_date: "",
});

function updateAPrestation() {
    updatePrestation(prestation.value)
        .then((res) => {
            console.log("Prestation mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour de la prestation", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getPrestationById(id)
            .then((res) => {prestation.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de la prestation", err))
    }
})
</script>

<style lang="scss" scoped>
</style>