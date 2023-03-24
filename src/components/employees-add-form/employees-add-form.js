import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeName: '',
            employeSalary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.employeName, this.state.employeSalary);
        // для очистки состояния
        this.setState({
            employeName : '',
            employeSalary : ''
        })
    }

    render() {
        const {employeName, employeSalary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.formSubmit}
                    className="add-form">
                    <input onChange={this.onValueChange} type="text"
                        className="form-control new-post-label"
                        name="employeName"
                        value={employeName}
                        placeholder="Как его зовут?" />
                    <input onChange={this.onValueChange} type="number"
                        className="form-control new-post-label"
                        name="employeSalary"
                        value={employeSalary}
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-gradient btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;