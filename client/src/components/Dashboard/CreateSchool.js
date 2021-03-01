import React  from 'react';
import SchoolForm from './SchoolForm';

class CreateSchool extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {};
    }

    onChange(field, value) {
        this.setState({[field]: value});
    }

    onSubmit(e) {
        e.preventDefault();

        const school = {
            name: this.state.name,
            description: this.state.description,
            location: this.state.location,
            admission: this.state.admission,
            image: this.state.image
        };

        console.log(school);

        window.location = '/school';
    }

    render() {
        return(
            <div>
                <h3>Add your school</h3>
                <SchoolForm onSubmit={this.onSubmit} onChange={this.onChange} buttonValue="Add School" />
            </div>
        );
    }
}

export default CreateSchool;