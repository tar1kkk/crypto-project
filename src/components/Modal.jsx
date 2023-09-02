import React, { useState} from 'react';

function Modal() {
    const [open, setOpen] = useState(true);
    return (
        <>
            {open && (
                <div className="modal">
                    <div className="modal-content">
          <span className="close" onClick={() => setOpen(false)}>
              &times;
          </span>
                        <p style={{color: 'black', fontSize: 15}}>Success auth</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
