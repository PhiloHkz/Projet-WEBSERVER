<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un Rendezvous</h3>

            <form @submit.prevent="updateARendezvous">
                <div class="mb-3">
                    <label for="type_rdv" class="form-label">Type de rendez vous</label>
                    <input
                        v-model="rendezvous.type_rdv"
                        type="text"
                        class="form-control"
                        id="type_rdv"
                        placeholder="Entrer le type de rendez vous"
                    />
                </div>

               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useRendezvous from "../../services/rendezvousServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateRendezvous,  getRendezvousById } = useRendezvous();
let rendezvous = ref({
    type_rdv: "",
   
});

function updateARendezvous() {
    updateRendezvous(rendezvous.value)
        .then((res) => {
            console.log("Rendezvous mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour du Rendezvous", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du Rendezvous avant l'affichage a l'ecran
    if (id) {
        getRendezvousById(id)
            .then((res) => {rendezvous.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture du Rendezvous", err))
    }
})
</script>

<style lang="scss" scoped>
</style>