import axios from "axios";
import { useEffect, useState } from "react";

const Componente = ({props1}) => {
    const [nomeEstado, setNomeEstado] = useState()

    const onClick =() => {
        setNomeEstado('teste')
    }

    const request = async () => {
        try{
            const {data} = await axios.get('http:// kdjfhosikdjnbcs')
            setNomeEstado(data)
        }catch(error) {
            console.error(error)
        }
    }

    //montagem
    useEffect(() => {

    }, [])


    //atualização
    useEffect(() => {
        setNomeEstado('useEffect')
    }, [props1])//Vai ser executada quando a props1 tiver alteração


    //Desmontagem
    useEffect(() => {
        return () => {

        }
    }, [])
    

    return (
        <div>
            <h3 onClick={onClick}>Revisão Final</h3>
            <input onChange={} />
        </div>
    );
}

export default Componente;