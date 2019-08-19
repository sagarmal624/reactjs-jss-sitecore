import React from 'react';
import "./product.css"
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            users:null
        };
    }

    componentDidMount() {

        fetch("http://dummy.restapiexample.com/api/v1/employees1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                  throw new Error("Something Went Wrong");
                }
            )
    }
    renderTableData() {

        return this.state.items.map((item, index) => {
            const { id, employee_name, employee_salary, employee_age ,profile_image} = item ;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{employee_name}</td>
                    <td>{employee_salary}</td>
                    <td>{employee_age}</td>
                    <td>{profile_image}</td>
                </tr>
            )
        })
    }
    renderTableHeader() {
        let header = Object.keys(this.state.items[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                     <table id='items'>
                        <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default ProductList;
