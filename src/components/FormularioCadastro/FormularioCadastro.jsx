import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro(){

    const [promocoes, setPromocoes] = useState(false);
    const [novidades, setNovidades] = useState(false)

    return(
        <form>

            <TextField 
                id="nome" 
                label="Nome" 
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
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