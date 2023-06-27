import './List.css'
import axios from 'axios'
import React from 'react'
import { useCallback, useEffect, useState } from 'react'


const List = () => {

    const [apiData, setApiData] = useState()
    const [loading, setLoading] = useState()
    const [botaoClick, setBotao] = useState()

    const fetchApiData = useCallback(async () => {
        try {
            const {data} = await axios.get('https://digimon-api.vercel.app/api/digimon')
            setApiData(data)
        }catch(error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        fetchApiData()
    }, [])

    const renderApiData = () => {
        if (loading || !apiData?.length) {
            return (<h1>Carregando</h1>)
        } 
        return (
            <div>
                {apiData.map(name => (
                    <div className='image-list'>
                        <h5 className='image-container'><img src={name.img} /></h5>
                        <h5 className='caixa2'>Name: {name.name}<br /> <br />Level: {name.level} </h5>
                    </div>
                ))}
            </div>
        )
    }
    
        const paginacao = () => {
            setBotao("ok")
        }

    return (
        <div className='container1'> 
            <h1 className='caixa'> Lista de Digimons </h1>
                <div className='botao'> 
                        <button onClick={paginacao}><h2>Pag - 02</h2></button>
                        <h3>{botaoClick}</h3>
                </div>
            {renderApiData()}
        </div>
    );
}


export default List;