import React from 'react';
import axios from 'axios';
import School from './School';

class SchoolList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {schools: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/schools/')
            .then(res => {this.setState({ schools: res.data })})
            .catch(err => console.log(err));
    }

    schoolList() {
        return this.state.schools.map(school => {
            return <School name={school.name} description={school.description} index={school._id} key={school._id}/>;
        })
    }

    render() {
        return (
            <div className="school-list">
                {this.schoolList()}
            </div>
        );
    }
}

export default SchoolList;