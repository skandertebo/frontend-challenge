import { GenericModal, GenericModalProps } from '@my-org/ui-shared';

export interface ConfirmDeleteTodoProps extends GenericModalProps {
  onConfirm: () => void;
}

export const ConfirmDeleteTodo: React.FC<ConfirmDeleteTodoProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <GenericModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-8 items-center px-8 py-2 w-[80vw] max-w-[500px]">
        <h2 className="text-xl font-medium text-yellow-800">
          Are you sure you want to delete this todo?
        </h2>
        <div className="flex gap-2">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </GenericModal>
  );
};
