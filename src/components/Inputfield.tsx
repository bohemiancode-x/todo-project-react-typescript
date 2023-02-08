import { useRef } from 'react';
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        handleAdd(e);
        inputRef.current?.blur();
    }

  return (
    <form className="input" onSubmit={handleSubmit}>
        <input type='input'
                ref={inputRef}
                placeholder="Enter a task"
                className='input__box'
                value={todo}
                onChange= {(e) => setTodo(e.target.value)}
                 />
        <button className="input_submit" type='submit'>Go</button>
    </form>
  )
}

export default Inputfield