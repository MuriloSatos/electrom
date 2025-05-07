const fs = require('fs');

const { ipcMain, dialog } = require('electron');

async function abrirSeletorArquivo() {

    const resultado = await dialog.showOpenDialog(
        {
            properties: ['openFile'],
            filters: [
                { name: 'jsons', extensions: ['json'] },

            ]
        }
    );

    if (resultado.canceled || resultado.filePaths.length === 0) {
        return null
    }




    let caminho = resultado.filePaths[0];
    const conteudo = fs.readFileSync(caminho, 'utf8');
    const dados = JSON.parse(conteudo); // lendo o arquivo json

    return dados;

};


function configurarHandleSelectFile() {
    ipcMain.handle('select-file', abrirSeletorArquivo);
};


module.exports = {
    configurarHandleSelectFile
}