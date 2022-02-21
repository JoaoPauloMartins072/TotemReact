import React, { useState } from "react";

export const FaturasContext = React.createContext({
    faturas: 'teste',
    setFatura: (faturas)=>{}

});

export const FaturasProvider = (props) => {

    const [faturas, setFatura] = useState()

    const faturasContext = {
        faturas,
        setFatura

    }

    return (
        <FaturasContext.Provider value={faturasContext}>
            {props.children}
        </FaturasContext.Provider>
    );
} 