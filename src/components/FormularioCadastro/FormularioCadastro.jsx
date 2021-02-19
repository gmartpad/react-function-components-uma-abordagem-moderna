import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function FormularioCadastro(){

    return(
        <form>

            <TextField 
                id="nome" 
                label="Nome" 
                variant="outlined"
                fullWidth
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
            />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
            />

            <label for="promocoes">Promoções</label>
            <input id="promocoes" type="checkbox"/>

            <label for="novidades">Novidades</label>
            <input id="novidades" type="checkbox"/>

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