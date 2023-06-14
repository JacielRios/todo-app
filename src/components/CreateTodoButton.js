import '../css/CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <button 
        className="create-todo-button"
        onClick={(e) => {
            console.log('le diste click');
            console.log(e.target);            
        }}
        >+</button>
    );
}

export { CreateTodoButton };