import { BiX } from 'react-icons/bi';

export interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GenericModal: React.FC<
  React.PropsWithChildren<GenericModalProps>
> = ({ isOpen, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <BiX className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};
