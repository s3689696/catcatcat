import React from 'react';
import { getImageUrl } from '../utils'

class Website extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
        }
    }

    componentDidMount() {
        fetch(this.props.url)
        .then(response => response.text())
        .then(data => {
            this.setState({ image: getImageUrl(data) })
        });

    }
        

    render() {

        return(
            <div className="website">
                <a href={this.props.url} target="_blank">
                <img src={this.state.image} height='96px' width='96px'></img>
                </a>
            </div>
        )
    }
}

export default Website;