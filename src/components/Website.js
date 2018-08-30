import React from 'react';

class Website extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {

        console.log(this.state.data)
        return(
            <div className="website">

            </div>
        )
    }
}

export default Website;