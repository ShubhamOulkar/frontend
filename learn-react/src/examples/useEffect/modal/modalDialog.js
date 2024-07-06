import { useEffect, useState, useRef } from "react";

export default function ModalDialog() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button onClick={() => setModal(!modal)}>Show modal</button>
      <Modal show={modal}>
        <p>This is dialog box</p>
        <button onClick={() => setModal(!modal)}>Close dialog</button>
      </Modal>
    </>
  );
}

function Modal({ show, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!show) return;

    const dialog = dialogRef.current;

    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [show]);

  return <dialog ref={dialogRef}>{children}</dialog>;
}
