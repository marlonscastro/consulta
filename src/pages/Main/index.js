import React, { useState } from 'react';
import logo from '../../assets/logopm.png';

import api from '../../services/api';


export default function Login({ history }) {

    const [numero, setNumero] = useState('');
    const [crc, setCrc] = useState('');
    async function handleSubmit(event) {
        event.preventDefault();

        let response = await api.get('/rop/45', {
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsIm1hdHJpY3VsYSI6MTEzNzIwNCwibmFtZSI6Ik1hcmxvbiBkZSBMaW1hIENhc3RybyIsImdyYWR1YWNhbyI6IlNvbGRhZG8iLCJleHBpcmVkX2F0IjoiMjAyMC0wMi0yMiAwOS0xMC0wNCJ9.A4ZNbaXjrQx8er7_LkesKSCv9zFwFdsTWUIOyygD92w`
            }
        });
        console.log(response.data);
    }

    function handleClick(event) {
        window.print();
    }

    return (
        <>
            <div className="logo" >
                <img src={logo} alt="Logotipo da PMPE" />
            </div>
            <div className="formulario" >
                <p>
                    Faça o download do seu <strong> Boletim de Ocorrência </strong> da PMPE.
                </p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="numero"> Número * </label>
                    <input id="numero"
                        placeholder="Digite o número do BO aqui"
                        value={numero}
                        onChange={event => setNumero(event.target.value)}
                    />

                    <label htmlFor="crc"> Código CRC * </label>
                    <input id="crc"
                        placeholder="Código CRC"
                        value={crc}
                        onChange={event => setCrc(event.target.value)}
                    />

                    <button className="btn" type="submit"> download </button>
                </form>
                <br />
                <button className="btn" onClick={handleClick}> Imprimir </button>

            </div>
        </>
    );
}