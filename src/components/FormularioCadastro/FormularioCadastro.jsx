import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro(){

    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true)

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("")

    return(
        <form>

            <TextField 
                value={nome}
                onChange={e=>setNome(e.target.value)}
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
                control={
                    <Switch 
                        name="promocoes" 
                        checked={promocoes}
                        defaultChecked={promocoes} 
                        onChange={e=>setPromocoes(e.target.checked)}
                    />
                }
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch 
                        name="novidades"
                        checked={novidades} 
                        defaultChecked={novidades} 
                        onChange={e=>setNovidades(e.target.checked)}
                    />
                }
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