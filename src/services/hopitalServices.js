import axios from 'axios'
const useHopital = () => {

    async function getHospitalList() {
        const resultat = await axios.get('http://localhost:5002/hospitals')
        return resultat.data

    }

    async function addHospital(hopital) {
        const resultat = await axios.post('http://localhost:5002/hospitals', hopital)
        return resultat

    }

    async function updateHospitals(id, updatedHospital) {
        const resultat = await axios.put(`http://localhost:5002/hospitals/${id}`, updatedHospital)
        return resultat

    }

    async function deleteHospital(id) {
        const resultat = await axios.delete(`http://localhost:5002/hospitals/${id}`)
        return resultat

    }

    async function getHospitalsById(id) {
        const resultat = await axios.get(`http://localhost:5002/hospitals/${id}`)
        return resultat.data

    }


    return { getHospitalList, addHospital, updateHospitals, deleteHospital, getHospitalsById }

}

export default useHopital