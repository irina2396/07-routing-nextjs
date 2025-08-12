import { useEffect, useState } from 'react'
import css from './NoteModal.module.css'
import { createPortal } from 'react-dom';

interface ModalProps {
    onClose: () => void
    children: React.ReactNode
}

export default function Modal({ onClose, children }: ModalProps) {
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
    
    useEffect(() => {
        setModalRoot(document.getElementById('modal-root'));

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };
    
    if (!modalRoot) return null; 

    return createPortal(
        <div
            className={css.backdrop}
            role='dialog'
            aria-modal='true'
            onClick={handleBackdropClick}
        >
            <div className={css.modal}>{children}</div>
        </div>,
        modalRoot
    );
}