import React from 'react';
import Button from "@material-ui/core/Button";

function FormularioCadastro(){

    return(
        <form>

            <label for="nome">Nome</label>
            <input id="nome" type="text"/>

            <label for="sobrenome">Sobrenome</label>
            <input id="sobrenome" type="text"/>

            <label for="cpf">CPF</label>
            <input id="cpf" type="text"/>

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