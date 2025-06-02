let openai_api_key = "";

// Récupération de la clé API depuis le stockage local
chrome.storage.local.get(['openai_api_key'], (result) => {
    openai_api_key = result.openai_api_key;
    if (openai_api_key === "") {
        console.error("Clé API non trouvée. Veuillez la configurer dans les paramètres de l'extension.");
    } else {
        console.log("Clé API récupérée :", openai_api_key);
        alert(openai_api_key);
    }
});

// Fonction pour récupérer le contenu du post LinkedIn
function getPostContent() {
    const postElement = document.querySelector('[data-test-id="main-feed-activity"]') ||
        document.querySelector('div.feed-shared-update-v2__description');

    const content = postElement.innerText.trim();
    if (content) {
        const content = postElement.innerText.trim();
        console.log("Contenu du post :", content);
        alert("Contenu du post : " + content);
        return content;
    } else {
        console.warn("Post non trouvé");
    }
}

// Écouteur d'événement pour le chargement de la page
window.addEventListener("load", () => {
    setTimeout(getPostContent, 1000);

    setTimeout(() => {
        const postContent = getPostContent();
        if (postContent) {
            commentPost(postContent);
        } else {
            console.warn("Aucun contenu de post à commenter.");
        }
    }, 2000);
});

// Fonction pour commenter un post LinkedIn
async function commentPost(post) {

    const commentField = document.querySelector('[data-test-id="comment-field"]') ||
        document.querySelector('div.comment-box__text-editor');

    if (commentField) {
        commentField.focus();
        commentField.innerText = post;
        console.log("Commentaire ajouté :", post);

    } else {
        console.warn("Champ de commentaire non trouvé");
    }

    // Appel à l'API OpenAI pour générer un commentaire 
    try 
        {
        const url = "https://openrouter.ai/api/v1/chat/completions";
        const headers = {
            "Authorization": `Bearer ${openai_api_key}`,
            "Content-Type": "application/json"
        };
        const payload = {
            "model": "google/gemini-2.5-flash-preview-05-20",
            "messages": [
                {
                    "role": "user",
                    "content": "Tu es un assistant qui commente des posts LinkedIn. Réponds uniquement par un commentaire naturel, concis et pertinent, dans le style habituel des utilisateurs LinkedIn. Ne donne aucune explication, aucun contexte, aucun titre. Juste une phrase de commentaire. Voici le post à commenter" + post
                }
            ]
        };

        const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log(data);
        alert(data.choices[0].message.content);
        console.log("Réponse de l'API :", data.choices[0].message.content);
    } catch (error) {
        console.error("Erreur lors de la récupération du commentaire :", error);
    }
}