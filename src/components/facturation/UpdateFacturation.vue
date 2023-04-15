<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'une facturation</h3>

            <form @submit.prevent="updateAFacturation">
                <div class="mb-3">
                    <label for="nom_prestation" class="form-label">Nom de la prestation</label>
                    <input
                        v-model="facturation.nom_prestation"
                        type="text"
                        class="form-control"
                        id="nom_prestation"
                        placeholder="Entrer le nom de la facturation"
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
                        placeholder="Entrez le prix"
                    />
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label"
                        >Date de presation</label
                    >
                    <input
                        v-model="facturation.prestation_date"
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
import useFacturation from "../../services/facturationServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id de la facturation que l'on doit mettre a jour
const id = route.params.id;

const { updateFacturation, getFacturationById } = useFacturation();
let facturation = ref({
    nom_prestation: "",
    prix: "",
    prestation_date: "",
});

function updateAFacturation() {
    updateFacturation(facturation.value)
        .then((res) => {
            console.log("Facturation mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour de la facturation", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getFacturationById(id)
            .then((res) => {facturation.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de la prestation", err))
    }
})
</script>

<style lang="scss" scoped>
</style>