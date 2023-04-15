import axios from 'axios'
const usePrestation = () => {

    async function getPrestationList() {
        const resultat = await axios.get('http://localhost:5002/prestations')
        return resultat.data

    }

    async function addPrestation(prestation) {
        const resultat = await axios.post('http://localhost:5002/prestations', prestation)
        return resultat

    }

    async function updatePrestation(id, updatedPrestation) {
        const resultat = await axios.put(`http://localhost:5002/prestations/${id}`, updatedPrestation)
        return resultat

    }

    async function deletePrestation(id) {
        const resultat = await axios.delete(`http://localhost:5002/prestations/${id}`)
        return resultat

    }

    async function getPrestationById(id) {
        const resultat = await axios.get(`http://localhost:5002/prestations/${id}`)
        return resultat.data

    }


    return { getPrestationList, addPrestation, updatePrestation, deletePrestation, getPrestationById }

}

export default usePrestation