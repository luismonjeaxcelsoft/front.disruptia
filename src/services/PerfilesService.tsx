import axios from "axios"

const API_URL = 'http://localhost:8080/api/perfiles'
interface Perfiles {
    id: number,
    name: string
}

export const PerfilesService = async (): Promise<Perfiles[]> => {

    try {
        const response = await axios.get(API_URL);
        return response.data as Perfiles[];
    } catch (error) {
        throw new Error('Error al obtener los perfiles')
    }
}