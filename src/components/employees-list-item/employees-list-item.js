import { Component } from 'react';
import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {employeName, employeSalary, onDelete, onToggleProp, increaseSalary, rise} = props;

    let className = "list-group-item";
    if(increaseSalary) {
        className += ' increase';
    }

    if(rise) {
        className += ' like';
    }
    
    return (
        <li className={className}>
            <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{employeName}</span>
            <input type="text" className="list-group-item-input" defaultValue={employeSalary + '$'}/>
            <div className='list-group-item__btn'>
                <button data-toggle="increaseSalary" onClick={onToggleProp} type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete}
                    type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;