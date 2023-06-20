import '../css/CreateTodoButton.css';

function CreateTodoButton({ setOpenModal, openModal }) {
    return(
        <button 
        className="create-todo-button"
        onClick={() => {setOpenModal(!openModal)}}
        >+</button>
    );
}

export { CreateTodoButton };