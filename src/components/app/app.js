import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, employeName: 'Valera', employeSalary: 800, increaseSalary: false, rise: true},
        {id: 2, employeName: 'Ivan', employeSalary: 700, increaseSalary: true, rise: false},
        {id: 3, employeName: 'Bob', employeSalary: 300, increaseSalary: false, rise: false},
        {id: 4, employeName: 'Kiril', employeSalary: 900, increaseSalary: false, rise: false},
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  addItem = (employeName, employeSalary) => {
    console.log(employeName);
    const newItem = {
      id: this.maxId + 1,
      employeName,
      employeSalary,
      rise: false,
      increaseSalary: false
    }
    this.setState(({data}) => {
      const newArray = [...data, newItem];
      return {
        data: newArray
      }
    })
  }
  
  render() {
    const employees = this.state.data.length;
    const employeesAward = this.state.data.filter(item => item.increaseSalary).length;
    return (
      <div className="app">
          <AppInfo employeesAward={employeesAward}
          employees={employees} />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          onToggleProp={this.onToggleProp}
          onDelete={this.deleteItem} 
          data={this.state.data}/>

          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
