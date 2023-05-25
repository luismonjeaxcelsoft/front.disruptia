import React, { useEffect, useState } from 'react';
import { PerfilesService } from '../services/PerfilesService';


interface Perfiles {
    id: number,
    name: string
}

export const SeleccionPerfiles = () => {
    
    const [data, setData] = useState<Perfiles[]>([]);
    
    useEffect(() => {
      const fetchPerfiles = async () => {
        try {
            const apiData = await PerfilesService();
            setData(apiData);
        } catch (error) {
            // Maneja el error de alguna manera apropiada (por ejemplo, mostrando un mensaje de error)
            console.error(error);
      }
    }

      fetchPerfiles();


    }, []);
    
    
    return (
        <div>
            <h1>¿En qué te gustaría trabajar?</h1>
            <div>
                {data.map((perfil) => 
                    <button>{perfil.name}</button>
                    
                    )}

            </div>

        </div>
    )
}