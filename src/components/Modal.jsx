import React, {useEffect, useState} from 'react';

function Modal() {
    const [open, setOpen] = useState(true);
    const [autoCloseTimer, setAutoCloseTimer] = useState(null);

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false);
            }, 3000);
            setAutoCloseTimer(timer);
        } else {
            if (autoCloseTimer) {
                clearTimeout(autoCloseTimer);
            }
        }
    }, [open,autoCloseTimer]);
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
