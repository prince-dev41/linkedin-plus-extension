# 🔗 LinkedIn Plus – Commenter les posts automatiquement avec intelligence

[🇫🇷 Français | 🇬🇧 English below]

## 🧠 Description

**LinkedIn Plus** est une extension Chrome open source qui lit automatiquement le contenu d’un post LinkedIn et génère un **commentaire pertinent et naturel** grâce à l’API d’un modèle LLM (comme Gemini ou GPT).  
Idéal pour ceux qui veulent interagir de façon intelligente et fluide sans perdre de temps.

## ✨ Fonctionnalités

- 🔍 Extraction automatique du contenu du post (sur sa page dédiée)
- 🧠 Génération d’un commentaire contextuel avec l’API d’OpenRouter (Gemini, GPT…)
- 💬 Remplissage automatique du champ de commentaire
- ⚙️ Clé API configurable via `chrome.storage.local`

## 🛠️ Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ton-nom/linkedin-plus.git
   ```

2. Allez sur `chrome://extensions`, activez **Mode développeur**, puis **Charger l’extension non empaquetée** et sélectionnez le dossier.

3. Ouvrez un post LinkedIn sur sa page (ex: `https://www.linkedin.com/feed/update/urn:li:activity:...`)  
   L’extension analysera automatiquement le contenu, générera un commentaire, et vous le proposera.

## 🔐 Configuration

Avant utilisation, ajoutez votre clé API dans le stockage local Chrome :

```js
chrome.storage.local.set({ openai_api_key: "ta-clé-secrète" });
```

Vous pouvez aussi ajouter un bouton ou une interface de configuration dans `popup.html`.

---

## 🇬🇧 English

### 🧠 Description

**LinkedIn Plus** is a Chrome open-source extension that automatically reads the content of a LinkedIn post and generates a **relevant and natural comment** using an LLM API (like Gemini or GPT).  
Perfect for professionals who want to engage meaningfully without wasting time.

### ✨ Features

- 🔍 Automatically extracts post content (on its dedicated page)
- 🧠 Contextual comment generation using OpenRouter API
- 💬 Automatically fills the comment field
- ⚙️ API key configurable via `chrome.storage.local`

### 🛠️ Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/your-name/linkedin-plus.git
   ```

2. Go to `chrome://extensions`, enable **Developer Mode**, then **Load unpacked extension** and select the folder.

3. Open a LinkedIn post in its unique page (`https://www.linkedin.com/feed/update/urn:li:activity:...`)  
   The extension will automatically analyze it and generate a suggested comment.

### 🔐 Configuration

Before use, store your API key like so:

```js
chrome.storage.local.set({ openai_api_key: "your-secret-key" });
```

You can also add a UI form in `popup.html` to enter the key.

---

## 💡 Idées futures / Future ideas

- Interface pour configurer la clé API directement  
- Support multi-posts dans le fil d’actualité  
- Ajout d’un bouton “Commenter avec IA”  
- Traduction multilingue automatique du commentaire  

---

## 🛡️ Licence

MIT – Vous pouvez utiliser, modifier et redistribuer librement ce projet.

---

## 🙌 Contributions

Les contributions sont bienvenues !  
Forkez le projet, ouvrez une **issue**, ou proposez une **pull request**.

---

## 📫 Contact

Développé par [Prince Ekpinse](https://www.linkedin.com/in/prince-ekpinse)  
Passionné par les extensions utiles et le low-effort smart content.
