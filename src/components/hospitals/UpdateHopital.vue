<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un hopital</h3>

            <form @submit.prevent="updateAHopital">
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
import { onBeforeMount, ref } from "vue";
import useHopital from "../../services/hopitalServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id de l' hopital que l'on doit mettre a jour
const id = route.params.id;

const { updateHospitals, getHospitalsById } = useHopital();
let hopital = ref({
    nom: "",
    adress: "",
});

function updateAHopital() {
    updateHospitals(hopital.value)
        .then((res) => {
            console.log("Hopital mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour de l'hopital", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getHospitalsById(id)
            .then((res) => {hopital.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de l' hopital", err))
    }
})
</script>

<style lang="scss" scoped>
</style>