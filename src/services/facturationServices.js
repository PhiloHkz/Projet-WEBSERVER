import axios from 'axios'
const useFacturation = () => {

    async function getFacturationList() {
        const resultat = await axios.get('http://localhost:5002/facturation')
        return resultat.data

    }

    async function addFacturation(facturation) {
        const resultat = await axios.post('http://localhost:5002/facturation', facturation)
        return resultat

    }

    async function updateFacturation(id, updatedFacturation) {
        const resultat = await axios.put(`http://localhost:5002/facturation/${id}`, updatedFacturation)
        return resultat

    }

    async function deleteFacturation(id) {
        const resultat = await axios.delete(`http://localhost:5002/facturation/${id}`)
        return resultat

    }

    async function getFacturationById(id) {
        const resultat = await axios.get(`http://localhost:5002/facturation/${id}`)
        return resultat.data

    }


    return { getFacturationList, addFacturation, updateFacturation, deleteFacturation, getFacturationById }

}

export default useFacturation