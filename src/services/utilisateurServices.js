import axios from 'axios'
const useUtilisateur = () => {

    async function getUtilisateurList() {
        const resultat = await axios.get('http://localhost:5002/users')
        return resultat.data

    }

    async function addUtilisateur(utilisateur) {
        const resultat = await axios.post('http://localhost:5002/users', utilisateur)
        return resultat

    }

    async function updateUtilisateur(id, updatedUtilisateur) {
        const resultat = await axios.put(`http://localhost:5002/users/${id}`, updatedUtilisateur)
        return resultat

    }

    async function deleteUtilisateur(id) {
        const resultat = await axios.delete(`http://localhost:5002/users/${id}`)
        return resultat

    }

    async function getUtilisateurById(id) {
        const resultat = await axios.get(`http://localhost:5002/users/${id}`)
        return resultat.data

    }


    return { getUtilisateurList, addUtilisateur, updateUtilisateur, deleteUtilisateur, getUtilisateurById }

}

export default useUtilisateur