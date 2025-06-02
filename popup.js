document.addEventListener("DOMContentLoaded", ()=>{
    const activateToogle = document.getElementById('activateToggle');
    const switchBtn = document.getElementById('toggle-switch');
    const statusEl = document.querySelector('.status');
    let openai_api_key = "";

    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        openai_api_key = data.get('apiKey').trim();
        //alert(openai_api_key.trim());
        if (openai_api_key === '') {
            alert('Veillez entrez une clé API !')
        }else {    
            // Store activation state
            chrome.storage.local.set({ openai_api_key });
            alert('Clé API enrégistrée avec succès !')
        }
    });

    chrome.storage.local.get(['isActive', 'openai_api_key'],(result)=>{
        if (result.isActive) {
            activateToggle.checked = true;
        };
    });

    activateToogle.addEventListener('change', ()=>{
        const isActive = activateToogle.checked;

        // Set config isActive in localstorage
        // Send message to the active tab
        // Store activation state
        chrome.storage.local.set({ isActive });
    });

    switchBtn.addEventListener('click', ()=>{
        if (activateToogle.checked) {
            activateToogle.checked = false;
            chrome.storage.local.set({ isActive: false });
            //statusEl.textContent="Desactivate"
        }else {
            activateToogle.checked = true,
            chrome.storage.local.set({ isActive: true });
            //statusEl.textContent = "Activate"
        }
    });

})