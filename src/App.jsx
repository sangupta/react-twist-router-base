import React from 'react';
import ReactDOM from 'react-dom';

import './AllRoutes';

@Component({ fork: true })
class App {

    @Observable title = 'Hello World';

    componentDidMount() {
        setTimeout(this.changeTitle, 1000);
    }

    @Bind
    changeTitle() {
        this.title = "Hello World, updated!";
    }

    render() {
        return <route:provider as={ route }>
            { route.view }

            <footer>
                { this.title }
            </footer>
        </route:provider>;
    }

}

ReactDOM.render( <App />, document.getElementById('appRoot') );
module.hot.accept();
