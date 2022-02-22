import './TelaBoletos.css';
import { React, useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FaturasContext } from "../../providers/faturas";
import './TelaBoletos.css';
import { useState } from 'react';

export default (props) => {


    const { faturas } = useContext(FaturasContext)
    const [checkbox, setCheckbox] = useState()

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
    //console.log(selectedIDs)
    //console.log(selectedRowData)
  
    function imprimir() {
        if(checkbox.lenght === 0){
            alert('selecione um boleto')
            return
        }
        alert('imprimindo')
        
    }

    return ( 
        <div className="tela-boleto" style={{ height: 400, width: '60%' }}>
            <DataGrid 
                rows={rows}
                columns={columns}
                checkboxSelection 
                //onSelectionModelChange={itm => setCheckbox(itm)}
                onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const checkbox = rows.filter((row) => selectedIDs.has(row.id))
                    console.log(selectedIDs)
                    console.log(checkbox);
                }}
                
                >
            </DataGrid>
            <button className="botao-imprimir" onClick={imprimir}>Imprimir</button>
        </div >
    )


}




