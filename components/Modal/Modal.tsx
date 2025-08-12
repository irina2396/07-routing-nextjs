
import { useRouter } from 'next/navigation';

interface ModalProps {
    children: React.ReactNode
    onClose?: () => void;
}

export default function Modal({ children }: ModalProps) {
    const router = useRouter();
    const close = () => router.back();

    return (
        <div>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={close}>Close</button>
            </div>
        </div>
    )
}