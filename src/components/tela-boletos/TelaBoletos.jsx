import './TelaBoletos.css';
import { React, useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FaturasContext } from "../../providers/faturas";
import './TelaBoletos.css';

// for (let fatura of faturas) 
//     fatura.push([{ id: faturas.id_fatura, data_vencimento: faturas.data_vencimento, valor: faturas.valor }])
//     console.log(fatura)

// 
// return []

export default (props) => {

    
    const { faturas } = useContext(FaturasContext)
    console.log(faturas)
       
    function tabela() {
       
       
        // console.log(faturas)
        // var array = []
        // for (let i = 0; i <= faturas.length - 1; i++) {
        //     array.push({ id: faturas[i].id_fatura, data_vencimento: faturas[i].data_vencimento, valor: faturas[i].valor })
        // }
        // return array 
    } 

    const rows = tabela()
    
   

    const columns = [
        { field: 'id', headerName: 'Nº Fatura', width: 140 },
        { field: 'data_vencimento', headerName: 'Data Vencimento', width: 140 },
        { field: 'valor', headerName: 'Valor R$', width: 140 },
    ];
    
    

    return ( 
        <div className="tela-boleto" style={{ height: 400, width: '60%' }}>
            <DataGrid 
                rows={rows}
                columns={columns}
                checkboxSelection >
            </DataGrid>
        </div>
    )
    
    
}
   



