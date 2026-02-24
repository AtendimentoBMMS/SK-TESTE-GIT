const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const CONFIG = {
    MODO_AUTOMATICO: true, 
    NOME_ZIP: path.basename(__dirname) + '.zip',
    ITENS: [
        { type: 'file', path: 'index.jsp', name: 'index.jsp' },
        { type: 'directory', path: 'src/', name: 'src' }
    ]
};

let isBuilding = false;

function gerarZip() {
    if (isBuilding) return;
    isBuilding = true;
    console.log('📦 [Build] Compactando arquivos...');

    const output = fs.createWriteStream(path.join(__dirname, CONFIG.NOME_ZIP));
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', function() {
        console.log(`✅ [Build] Sucesso! '${CONFIG.NOME_ZIP}' criado (${(archive.pointer() / 1024).toFixed(2)} KB)`);
        isBuilding = false;
    });

    archive.on('error', function(err) {
        console.error('❌ [Build] Erro:', err);
        isBuilding = false;
    });

    archive.pipe(output);

    CONFIG.ITENS.forEach(item => {
        if (item.type === 'file') {
            if (fs.existsSync(item.path)) archive.file(item.path, { name: item.name });
        } else if (item.type === 'directory') {
            if (fs.existsSync(item.path)) archive.directory(item.path, item.name);
        }
    });

    archive.finalize();
}

gerarZip();

if (CONFIG.MODO_AUTOMATICO) {
    console.log('👀 [Build] Monitorando alterações...');
    let debounceTimeout;
    const pathsToWatch = CONFIG.ITENS.map(i => i.path).filter(p => fs.existsSync(p));

    pathsToWatch.forEach(targetPath => {
        fs.watch(targetPath, { recursive: true }, (eventType, filename) => {
            if (filename && !filename.includes(CONFIG.NOME_ZIP)) {
                clearTimeout(debounceTimeout);
                debounceTimeout = setTimeout(() => {
                    console.log(`📝 Alteração detectada: ${filename}`);
                    gerarZip();
                }, 500);
            }
        });
    });
}
