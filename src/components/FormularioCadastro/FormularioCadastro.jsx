import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro(){

    const [promocoes, setPromocoes] = useState(false);
    const [novidades, setNovidades] = useState(false)

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("")

    return(
        <form>

            <TextField 
                value={nome}
                onChange={e=>{
                    // if(e.target.value.length > 3){
                        setNome(e.target.value.substring(0,3))
                    // }
                
                }}
                id="nome" 
                label="Nome" 
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={sobrenome}
                onChange={e=>setSobrenome(e.target.value)}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                nome={cpf}
                onChange={e=>setCPF(e.target.value)}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                control={<Switch name="promocoes" checked={promocoes} onClick={() => setPromocoes(!promocoes)}/>}
                label="Promoções"
            />

            <FormControlLabel
                control={<Switch name="novidades" checked={novidades} onClick={() => setNovidades(!novidades)}/>}
                label="Novidades"
            />

            <Button 
                type="submit"
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>

        </form>
    );

}

export default FormularioCadastro;