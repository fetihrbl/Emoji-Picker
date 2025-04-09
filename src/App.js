import React, { useState } from 'react';
import './App.css';
import EmojiPicker from 'emoji-picker-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [chosenEmoji, setChosenEmoji] = useState('');

  const copyToClipboard = async (emoji) => {
    try{
      await navigator.clipboard.writeText(emoji);
      toast.success('Emoji Copied', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      })
    } catch {
      toast.error('Copy Failed');
    }
  }

  const handleEmojiClick = (emojiData) => {
    const emoji = emojiData.emoji;
    setChosenEmoji(emoji);
    copyToClipboard(emoji);
  }

  return (
    <div className="emoji-app">
        <h1>Chose and Copy Emoji</h1>
        {chosenEmoji && (
          <div className="selected-emoji-card">
          <p>Chosen Emoji:</p>
          <div className="emoji-preview">{chosenEmoji}</div>
        </div>
        )}
         <div className="picker-container">
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
