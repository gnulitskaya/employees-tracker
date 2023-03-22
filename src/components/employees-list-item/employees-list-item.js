import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
       super(props); 
       this.state = {
        increaseSalary: false,
        star: false
       }
    }

    onIncrease = () => {
        this.setState(({increaseSalary}) => ({
            increaseSalary: !increaseSalary,
        }))
    }

    addStar = () => {
        this.setState(({star}) => ({
            star: !star
        }))
    }

    render() {
        const {employeName, employeSalary, onDelete} = this.props;
        const {increaseSalary, star} = this.state;

        let className = "list-group-item";
        if(increaseSalary) {
            className += ' increase';
        }

        if(star) {
            className += ' like';
        }
        
        return (
            <li className={className}>
                <span onClick={this.addStar} className="list-group-item-label">{employeName}</span>
                <input type="text" className="list-group-item-input" defaultValue={employeSalary + '$'}/>
                <div className='list-group-item__btn'>
                    <button onClick={this.onIncrease} type="button"
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
}

export default EmployeesListItem;