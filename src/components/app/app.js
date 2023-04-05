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
      ],
      term: '',
      filter: 'all'
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

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.employeName.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onUpdateFilter = (filter) => {
    this.setState({filter});
  }

  filterList = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThan1000':
        return items.filter(item => item.employeSalary > 1000);
      default:
        return items
    }
  }
  
  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const employeesAward = this.state.data.filter(item => item.increaseSalary).length;
    const visibleData = this.filterList(this.searchEmp(data, term), filter);

    return (
      <div className="app">
          <AppInfo employeesAward={employeesAward}
          employees={employees} />
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter 
              onUpdateFilter={this.onUpdateFilter}
              filter={filter}/> 
          </div>
          
          <EmployeesList 
          onToggleProp={this.onToggleProp}
          onDelete={this.deleteItem} 
          data={visibleData}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
