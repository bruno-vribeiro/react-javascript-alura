import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'
import React, { useState } from 'react';

const Formulario = (props)=>{
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
        ]
    const aoSalvar = (evento)=>{
        evento.preventDefault()

        props.colaborador({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
    <section className="formulario"> 
        <form onSubmit={aoSalvar}>
            <h2>Preenchar os campos para criar o card do colaborador</h2>
            <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label='Nome' placeholder='Digite seu nome'/>
              <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label='Cargo' placeholder='Digite seu cargo'/>
              <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label='Imagem' placeholder='Digite o endereço da imagem'/>
              <ListaSuspensa valor={time} aoAlterado={valor=>setTime(valor)} obrigatorio={true} label="Times" itens={times}/>
              <Botao>
                Criar card
              </Botao>
        </form>
    </section>
)}

export default Formulario;