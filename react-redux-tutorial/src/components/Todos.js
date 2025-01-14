import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import { RiDeleteBinFill } from 'react-icons/ri';

const TodoItems = ({ todo, onToggle, onRemove }) => {
    // const [isChecked, setIsChecked] = useState(false);

    // const handleChange = (event) => {
    //     if (event.target.checked) {
    //         console.log('✅ Checkbox is checked');
    //     } else {
    //         console.log('⛔️ Checkbox is NOT checked');
    //     }
    //     setIsChecked((current) => !current);
    // };

    return (
        <Items>
            <div className="checkbox_wrap">
                <input
                    id={'ListCheck' + todo.id}
                    type="checkbox"
                    // onChange={handleChange}
                    // value={isChecked}
                    onClick={() => onToggle(todo.id)}
                    checked={todo.done}
                    readOnly={true}
                />
                {todo.done ? <FiCheckSquare /> : <FiSquare />}
                <label
                    htmlFor={'ListCheck' + todo.id}
                    style={{
                        textDecoration: todo.done ? 'line-through' : 'none',
                    }}
                >
                    {todo.text}
                    {todo.id}
                </label>
            </div>
            <button className="del_btn" onClick={() => onRemove(todo.id)}>
                <RiDeleteBinFill />
            </button>
        </Items>
    );
};
const Todos = ({
    input, //인풋에 입력되는 텍스트
    todos, // 할 일 목록이 들어있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput(''); // 등록 후 인풋 초기화
    };

    const onChange = (e) => onChangeInput(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <TodoItems
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </ul>
        </div>
    );
};
export default Todos;

const Items = styled.li`
    display: flex;
    align-items: center;
    font-size: 1rem;

    & input {
        display: none;
    }

    & label + svg {
        width: 15px;
        height: 15px;

        margin-right: 8px;
    }

    & label {
        cursor: pointer;
    }

    & .del_btn {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;

        margin-left: auto;

        & svg {
            fill: #888;
            width: 100%;
            height: 100%;
        }
    }

    & + li {
        margin-top: 10px;
    }
`;
