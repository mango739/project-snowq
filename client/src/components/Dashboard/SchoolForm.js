import React from 'react';

class SchoolForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeAdmission = this.onChangeAdmission.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state = {
            name: '',
            description: '',
            location: '',
            admission: '',
            image: ''
        };
    }

    onChangeName(e) {
        this.setState({name: e.target.value});
        this.props.onChange("name", e.target.value);
    }

    onChangeDescription(e) {
        this.setState({description: e.target.value});
        this.props.onChange("description", e.target.value);
    }

    onChangeLocation(e) {
        this.setState({location: e.target.value});
        this.props.onChange("location", e.target.value);
    }

    onChangeAdmission(e) {
        this.setState({admission: e.target.value});
        this.props.onChange("admission", e.target.value);
    }

    onChangeImage(e) {
        this.setState({image: e.target.value});
        this.props.onChange("image", e.target.value);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} placeholder={this.props.defaultValue ? this.props.defaultValue.name : ''} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">About</label>
                        <textarea className="form-control" value={this.state.description} onChange={this.onChangeDescription} placeholder={this.props.defaultValue ? this.props.defaultValue.description : ''} required></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Location</label>
                        <textarea className="form-control" value={this.state.location} onChange={this.onChangeLocation} placeholder={this.props.defaultValue ? this.props.defaultValue.location : ''} required></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Admission</label>
                        <textarea className="form-control" value={this.state.admission} onChange={this.onChangeAdmission} placeholder={this.props.defaultValue ? this.props.defaultValue.admission : ''} required></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Image</label>
                        <input className="form-control" type="file" value={this.state.image} onChange={this.onChangeImage} placeholder={this.props.defaultValue ? this.props.defaultValue.image : ''} required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-dark" value={this.props.buttonValue} required/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SchoolForm;