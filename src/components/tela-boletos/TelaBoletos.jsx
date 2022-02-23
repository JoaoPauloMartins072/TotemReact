import './TelaBoletos.css';
import { React, useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FaturasContext } from "../../providers/faturas";
import { useNavigate } from 'react-router-dom';
import './TelaBoletos.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default (props) => {
    const { Bancos, Boletos, streamToPromise } = require('../../../gerar-boletos-master/lib');
    const navigate = useNavigate();
    const { faturas } = useContext(FaturasContext)
    const [boleto, setBoleto] = useState([])


    function tabela() {
        return faturas.map(fatura => fatura = { id: fatura.id_fatura, data_vencimento: fatura.data_vencimento, valor: fatura.valor });
    }

    const rows = tabela()

    const columns = [
        { field: 'id', headerName: 'Nº Fatura', width: 140 },
        { field: 'data_vencimento', headerName: 'Data Vencimento', width: 140 },
        { field: 'valor', headerName: 'Valor R$', width: 140 },
    ];

    console.log(boleto)

    function imprimir() {

        if (boleto.length === 0) {
            alert('selecione um boleto')
            return
        }
        alert('imprimindo')

        const novoBoleto = new Boletos(boleto);
        novoBoleto.gerarBoleto();

        novoBoleto.pdfFile('C:\\Users\\SAC\\Downloads\\boletos').then(async ({ stream }) => {
            // ctx.res.set('Content-type', 'application/pdf');	
            await streamToPromise(stream);
        }).catch((error) => {
            return error;
        });
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
                    setBoleto(selectedRowData)
                    console.log(selectedRowData)
                }}

            >
            </DataGrid>
            <button className="botao-imprimir" onClick={imprimir}>Imprimir</button>
        </div >
    )


}