import './TelaBoletos.css';
import { React, useContext } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { FaturasContext } from "../../providers/faturas";
import './TelaBoletos.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export default (props) => {
    const navigate = useNavigate();
    const { faturas } = useContext(FaturasContext)
    const [boleto, setBoleto] = useState([])

    function tabela() {
       
        return faturas.map(fatura => fatura = { id: fatura.id_fatura, data_vencimento: fatura.data_vencimento, valor: fatura.valor, link: fatura.link });
    }
    const rows = tabela()
    const columns = [
        { field: 'id', headerName: 'Nº Fatura', width: 140 },
        { field: 'data_vencimento', headerName: 'Data Vencimento', width: 140 },
        { field: 'valor', headerName: 'Valor R$', width: 140 },
    ];
    
    function imprimir() {
        if (boleto.length === 0) {
            toast.warning('selecione um boleto',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                icon: false
                })
            return
        }
        var boletoLink = boleto.map(boleto => boleto = { link: boleto.link })
        // console.log(boletoLink)
        // console.log(boletoLink.length)
            boletoLink.forEach(boleto => {
                axios.get(boleto.link, { responseType: 'arraybuffer' }).then((response) => {
                    console.log(response.data)
                    var blob = new Blob([response.data], { type: 'application/pdf' });
                    console.log(blob)
                    const blobUrl = URL.createObjectURL(blob);
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = blobUrl;
                    document.body.appendChild(iframe);
                    iframe.contentWindow?.print()                   
                })
            })
    // para uma impressão silenciosa(sem abrir a tela de opções de impressão) faça os passos a seguir >>
    // no icone da area de trabalho do anvegador clique com botão direito vai em propriedades
    //  > atalho e em "Destino" no final da linha de "espaço" e digite  --kiosk-printing.
    //  devera ficar mais ou menos assim: '....exe" - --kiosk-printing'

        toast.success('imprimindo')
        toast.success('Voltando a tela principal')
        navigate('/')

        
    }
    return (
        <div className="tela-boleto" style={{ height: 400, width: '60%' }}>
        <ToastContainer icon={false} />
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                onSelectionModelChange={ids => {
                    const selectedIDs = new Set(ids);
                    const selectedRowData = rows.filter((row) => selectedIDs.has(row.id),
                    )
                    setBoleto(selectedRowData)
                    // console.log(selectedRowData)
                }}

            >
            </DataGrid>
            <button className="botao-imprimir" onClick={imprimir}>Imprimir</button>
        </div >
    )
}