import React from 'react';

class Website extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            url: 'http://giantbomb.com'
        }
    }

    componentDidMount() {
        fetch(this.state.url)
        .then(response => response.text())
        .then(data => {
            this.setState({ image: this.getImageUrl(data) })
        });

    }
        getImageUrl(text) {
            var el = document.createElement( 'html' );
            el.innerHTML = text;
            console.log(el)
            let nodeList = el.getElementsByTagName("link");
            console.log(nodeList)
            for (var i = 0; i < nodeList.length; i++)
            {
                if((nodeList[i].getAttribute("rel") === "apple-touch-icon-precomposed") || (nodeList[i].getAttribute("rel") === "apple-touch-icon")
                    || (nodeList[i].getAttribute("rel") === "icon"))
                {
                    console.log(nodeList[i].getAttribute("href"));
                    return (this.state.url + nodeList[i].getAttribute("href"));
                }
            }
        }

    render() {

        return(
            <div className="website">
                {<img src={this.state.image}></img>}

            </div>
        )
    }
}

export default Website;