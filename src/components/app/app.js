import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { render } from '@testing-library/react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, employeName: 'Valera', employeSalary: 800, increaseSalary: false},
        {id: 2, employeName: 'Ivan', employeSalary: 700, increaseSalary: true},
        {id: 3, employeName: 'Bob', employeSalary: 300, increaseSalary: false},
        {id: 4, employeName: 'Kiril', employeSalary: 900, increaseSalary: false},
      ]
    }
  }

  deleteItem = (id) => {
    console.log(id);
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
  
  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          onDelete={this.deleteItem} 
          data={this.state.data}/>
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
