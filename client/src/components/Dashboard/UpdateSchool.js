import React  from 'react';
import axios from 'axios';
import SchoolForm from './SchoolForm';

class UpdateSchool extends React.Component {
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

        axios.post('http://localhost:5000/schools/' + this.props.match.params.id, school)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        window.location = '/school';
    }

    componentDidMount() {
        axios.get('http://localhost:5000/schools/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    description: res.data.description,
                    location: res.data.location,
                    admission: res.data.admission,
                    image: res.data.image
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <h3>Update your school</h3>
                <SchoolForm onSubmit={this.onSubmit} onChange={this.onChange} buttonValue="Update School" defaultValue={this.state}/>
            </div>
        );
    }
}

export default UpdateSchool;