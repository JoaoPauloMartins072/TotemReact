import './TelaBoletos.css';
import { React, useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FaturasContext } from "../../providers/faturas";
import './TelaBoletos.css';

export default async (props) => {
    const columns = [
        { field: 'id', headerName: 'Nº Fatura', width: 140 },
        { field: 'data_vencimento', headerName: 'Data Vencimento', width: 140 },
        { field: 'valor', headerName: 'Valor R$', width: 140 },
    ];

    const { faturas } = useContext(FaturasContext)

    const rows =  await gerandoDados()

     async function gerandoDados() {
        
        for await (let [index, fatura] of faturas.entries()) {
            fatura = ({ id: faturas[index].id_fatura, data_vencimento: faturas[index].data_vencimento, valor: faturas[index].valor }) 
            return fatura
        }
       return []
    }
    console.log(rows)
    // Nº Fatura  ... id_fatura
    // Data Vencimento ... data_vencimento_br
    // Valor R$ ... valor

    return (
        <div className="tela-boleto" style={{ height: 400, width: '60%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
            />
        </div>
    );


}

