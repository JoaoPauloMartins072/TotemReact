import './TelaBoletos.css';
import { React, useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FaturasContext } from "../../providers/faturas";
import './TelaBoletos.css';

export default (props) => {

    const columns = [
        { field: 'id', headerName: 'Nº Fatura', width: 140 },
        { field: 'data_vencimento', headerName: 'Data Vencimento', width: 140 },
        { field: 'valor', headerName: 'Valor R$', width: 140 },
    ];
    const { faturas } = useContext(FaturasContext)
    console.log(faturas)

    function tabela() {
        // var fatura = []
        // for (let fatura of faturas) {
        //     fatura.push([{ id: faturas.id_fatura, data_vencimento: faturas.data_vencimento, valor: faturas.valor }])
        //     console.log(fatura)
            
        // }
        // return []
    }


    const rows = [{ id: 1, data_vencimento: '12/12/12', valor: 'R$10,00' }]



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

