@Component
export default class OtherView {
    
    render() {
        return <div>
            <p>This is the other view</p>
            <br /><br />
            <route:link to='home'>Switch to home view</route:link>
        </div>
    }

}
