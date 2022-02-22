import './TelaBoletos.css';
import { React, useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FaturasContext } from "../../providers/faturas";
import { useNavigate } from 'react-router-dom';
import './TelaBoletos.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default (props) => {

    const navigate = useNavigate();
    const { faturas } = useContext(FaturasContext)
    const [checkbox, setCheckbox] = useState([])
    var Boleto = require('./node-boleto').Boleto

    function tabela() {
     return faturas.map(fatura => fatura = { id: fatura.id_fatura, data_vencimento: fatura.data_vencimento, valor: fatura.valor });
    }

    const rows = tabela()

    const columns = [
        { field: 'id', headerName: 'Nº Fatura', width: 140 },
        { field: 'data_vencimento', headerName: 'Data Vencimento', width: 140 },
        { field: 'valor', headerName: 'Valor R$', width: 140 },
    ];

    console.log(checkbox)

    function imprimir() {
        
        var boleto = new Boleto({

        })
        if (checkbox.length === 0) {
            alert('selecione um boleto')
            return
        }
        alert('imprimindo')
        
        //navigate('/')

    }

    return (
        <div className="tela-boleto" style={{ height: 400, width: '60%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                //ref={ref} 
                //onSelectionModelChange={itm => setCheckbox(itm)}
                onSelectionModelChange={ids => {
                    const selectedIDs = new Set(ids);
                    const selectedRowData = rows.filter((row) => selectedIDs.has(row.id),
                    )
                    setCheckbox(selectedRowData)
                    console.log(selectedRowData)
                }}

            >
            </DataGrid>
            <button className="botao-imprimir" onClick={imprimir}>Imprimir</button>
        </div >
    )


}