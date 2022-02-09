import React from "react";
import './TelaBoletos.css';
import { DataGrid } from '@mui/x-data-grid';

export default (props) => {

    const columns = [
        { field: 'id', headerName: 'Nº Fatura', width: 140 },
        { field: 'data_vencimento_br', headerName: 'Data Vencimento', width: 140 },
        { field: 'valor', headerName: 'Valor R$', width: 140 },
    ];

    const rows = [
        { id: 1, data_vencimento_br: '10/10/22', valor: 'R$10,00' },
    ];

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

