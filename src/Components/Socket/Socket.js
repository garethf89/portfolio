import React, { PureComponent } from "react";
import * as io from 'socket.io-client';

class Socket extends PureComponent {

    constructor(){
        super();

        this.state = {
          count: 0,
          countText: '',
          ready : false
        }

        const connectionString = process.env.REACT_APP_API_URL;
        const socket = io.connect(connectionString);
        this.startSocket(socket);
    }

    startSocket(socket){

        socket.on('connect', () => {
          socket.on('count', (msg) => {

            let countText = ' current viewer';

            if (msg.count > 1) {
              countText = ' current viewers';
            }

            console.log(msg)

            this.setState({
              ready : true,
              countText: countText,
              count: msg.count
            });

          });
        });
    }


    render() {

        let visible = this.state.ready ? 'visible' : '';
        const { count, countText } = this.state;

        return (
            <div className="site_row">
                <div id="counter" className={visible}>
                    <strong>{count}</strong>
                    {countText}
                </div>
            </div>
        );
    }
}

export default Socket;
