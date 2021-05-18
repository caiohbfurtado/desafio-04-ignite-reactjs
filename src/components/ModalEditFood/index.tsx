import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

interface DataForm {
  name: string;
  image: string;
  description: string;
  price: string;
  id: number;
  available: boolean;
}

interface ModalUpdateFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (data: DataForm) => void;
  isOpen: boolean;
  editingFood: DataForm;
}

function ModalEditFood ({ isOpen, setIsOpen, handleUpdateFood, editingFood }: ModalUpdateFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: DataForm) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      setIsOpen={setIsOpen}
    >
      <Form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        initialData={editingFood}
      >
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
