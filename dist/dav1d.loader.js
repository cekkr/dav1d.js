function supportsWasmSimd() {
    try {
      if (typeof WebAssembly === "object" && typeof WebAssembly.instantiate === "function") {
        const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01, 0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07, 0x0b, 0x01, 0x07, 0x74, 0x65, 0x73, 0x74, 0x5f, 0x73, 0x69, 0x6d, 0x64, 0x00, 0x00, 0x0a, 0x09, 0x01, 0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x0b, 0x00, 0x1a));
        if (module instanceof WebAssembly.Module)
          return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
      }
    } catch (e) {
    }
    return false;
}

function importScript(path) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = path;
        script.type = 'module'; // Importante per i moduli ES6

        script.onload = () => {
        console.log(`Script ${path} caricato con successo.`);
        resolve(); // Risolve la promessa quando lo script è caricato
        };

        script.onerror = (error) => {
        console.error(`Errore durante il caricamento dello script ${path}:`, error);
        reject(error); // Rifiuta la promessa in caso di errore
        };

        document.head.appendChild(script); // Aggiunge lo script all'head del documento
    });
}

if(supportsWasmSimd()) {
    importScript('dav1d.simd.js');
} else {
    importScript('dav1d.js');
}