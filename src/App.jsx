
// import './App.css'
// import Todo from './components/Todo'


// function App() {


//   return (
//     <>
//       <Todo/>
//     </>
//   )
// }


// export default App

import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { BsQuestionCircle } from 'react-icons/bs';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleHelpClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleYesClick = () => {
    window.open('https://wa.me/9389916233?text=I%20need%20help%20regarding%20the%20todo%20app', '_blank');
    setShowPopup(false);
  };

  return (
    <>
      <Todo />

      {/* Help Icon */}
      <div
        className="help-icon"
        onClick={handleHelpClick}
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '300px',
          cursor: 'pointer',
          backgroundColor: '#f0f0f0',
          padding: '10px',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <BsQuestionCircle size={24} color="#007bff" />
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div className="popup-content" style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '400px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
            <p>Want help regarding this Todo app?</p>
            <div className="popup-buttons" style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}>
              <button onClick={handleClosePopup} style={{
                backgroundColor: '#ccc',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}>
                Cancel
              </button>
              <button onClick={handleYesClick} style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

