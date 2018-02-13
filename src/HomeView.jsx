@Component
export default class HomeView {
    
    render() {
        return <div>
            <p>This is the home view</p>
            <br /><br />
            <route:link to='other'>Switch to other view</route:link>
        </div>
    }
}
