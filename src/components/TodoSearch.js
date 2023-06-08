import '../css/TodoSearch.css';

function TodoSearch() {
    return(
        <input 
        className='filter-todos' 
        placeholder="Play basketball"
        onChange={(e) => {
            console.log('Hubo un cambio en el input');
            console.log(e.target.value);
        }}
        />
    );
}

export { TodoSearch };