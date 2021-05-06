import EmployInfo from "../components/EmployInfo";
import API from "../utils/API";
import React, { Component } from 'react'
import SearchBar from "../components/SearchBar"

class Index extends Component {
    state = {
        employee: [{
            picture: {
                thumbnail: "",
            },
            name: {
                first: "",
                last: "",
            },
            location: {
                state: "",
                city: "",                
            },
            dob:{
                age: "",
            },                
            
        }],
        order: "ascend",
        search: "",
        filterEmployee: [],
    }

    componentDidMount() {
        API.getEmployee().then (res => {
            this.setState({
                employee: res.data.results,
                filterEmployee: res.data.results,
            })
        }).catch(err => console.log ("api call" + err))
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        this.filterEmployee(value)
    };

    filterEmployee = (search) => {
        const newEmployee = this.state.filterEmployee.filter(staff => {
            return (
                staff.name.first.toLowerCase().includes(search.toLowerCase()) ||
                staff.name.last.toLowerCase().includes(search.toLowerCase())
                // staff.name.loaction.city.toLowerCase().includes(search.toLowerCase()).includes(search.toLowerCase()) 
                // .includes(search.toLowerCase())
            )
        });
        this.setState({
            employee: newEmployee
        })
    }

    
    sortDirectory = () => {
        const sortEmployee = this.state.employee.sort((a,b)=> {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0;
        });

        if(this.state.sortSequence === "DESC") {
            sortEmployee.reverse();
            this.setState({ sortSequence: "ASC"});
        } else {
            this.setState({sortSequence: "DESC"})
        }

        this.setState({results: sortEmployee})
    }

    render() {
        return (
            <div className="conatainer">
            <SearchBar handleInputChange={this.handleInputChange}/>
            
            <p className="text-secondary text-canter">Click Employee Name Heading to Sort</p>
            <div className="row display" onClick={()=> this.sortDirectory("name","first")}>
            <div className="col-md-3" >
                <h3>Image</h3>
            </div>
            <div className="col-md-3" onClick={()=> this.sortDirectory("name","last")} >
                <h3>Employee Name</h3>
            </div>
            <div className="col-md-3" onClick={()=> this.sortDirectory("location","city")} >
                <h3>Location</h3>
            </div>
            <div className="col-md-3" onClick={()=> this.sortDirectory("dob","age")} >
                <h3>Age</h3>
            </div>
            </div>
            <EmployInfo employee={this.state.employee}/>
            </div>
        )
    }

}

export default Index;
