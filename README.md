# Scribe It

**Scribe It** is a transcription app designed for seamless audio transcription, translation, and file handling. Built using **React**, **Vite**, and **Xenova**, this app offers a user-friendly interface for recording, uploading, and processing audio files with cutting-edge AI models.

## Features

- **Record Audio**: Capture audio directly from your browser.
- **File Upload**: Upload `.mp3` or `.wav` files for transcription.
- **Transcription**: Converts audio into text using advanced AI models.
- **Translation**: Translate transcriptions into multiple languages.
- **Download/Copy**: Easily download or copy the transcriptions.

## Tech Stack

- **React**: Frontend framework.
- **Vite**: Lightning-fast development environment.
- **Xenova**: AI model pipeline for transcription and translation.
- **NPM**: Dependency management.

---

## Installation

Follow these steps to set up and run the project on your local system:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [NPM](https://www.npmjs.com/) (v8 or higher)

### Clone the Repository

```bash
git clone https://github.com/your-username/scribe-it.git
cd scribe-it
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## Usage

### Recording Audio

1. Click on **Record** to start capturing audio.
2. Press **Stop Recording** to finish.

### Uploading Files

1. Click on the **Upload** option.
2. Select a `.mp3` or `.wav` file from your system.

### Transcribing

1. Once the audio is ready, click on **Transcribe**.
2. Wait for the transcription process to complete.

### Translating Text

1. Choose a target language from the dropdown.
2. Click **Translate** to see the translated text.

### Downloading/Copying Output

1. Use the **Download** button to save the transcription.
2. Click **Copy** to copy the text to your clipboard.

---

## File Structure

```
scribe-it/
├── src/
│   ├── components/
│   │   ├── FileDisplay.jsx
│   │   ├── Header.jsx
│   │   ├── HomePage.jsx
│   │   ├── Information.jsx
│   │   ├── Transcribing.jsx
│   │   ├── Transcription.jsx
│   │   └── Translation.jsx
│   ├── utils/
│   │   ├── presets.js
│   │   ├── translate.worker.js
│   │   └── whisper.worker.js
│   └── App.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## Scripts

The following scripts are available:

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run preview`**: Preview the production build locally.

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

Special thanks to the open-source libraries and tools used in this project:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Xenova](https://www.xenova.ai/)
