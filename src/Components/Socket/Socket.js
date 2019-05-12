import React, { Component } from "react";
import * as io from 'socket.io-client';

class Socket extends Component {

    constructor(){
        super();

        this.countText = '';
        this.state = {
            ready : false
        }

        const connectionString = process.env.REACT_APP_API_URL;
        this.socket = io.connect(connectionString);
    }

    componentDidMount(){
        
        this.socket.on('connect', () => {

            this.socket.send('here');
        
            this.socket.on('count', (msg) => {

                this.count = msg.count;
    
              if (msg.count > 1) {
                this.countText = ' current viewers';
              } else {
                this.countText = ' current viewer';
              }

              if (!this.ready) {
                this.ready = true;
              }

              this.setState({
                ready : true
              });

            });
        });
    }


    render() {

        let visible = this.state.ready ? 'visible' : '';

        return (
            <div className="site_row">
                <div id="counter" className={visible}>
                    <strong>{this.count}</strong>
                    {this.countText}
                </div>
            </div>
        );
    }
}

export default Socket;
