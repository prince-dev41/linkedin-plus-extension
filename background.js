//Etat initial de l'extension quand elle est activée
chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.local.set({
        isActive: true,
        openai_api_key: "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"
    });
    if (message.action === "getState") {
        chrome.storage.local.get(['isActive', 'openai_api_key'], (result)=>{
            sendResponse(result);
        });
        return true;
    }
});