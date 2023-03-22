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
        const {employeName, employeSalary} = this.props;
        const {increaseSalary, star} = this.state;

        let className = "list-group-item d-flex justify-content-between";
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
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.onIncrease} type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
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