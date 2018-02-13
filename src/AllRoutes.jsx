import HomeView from './HomeView';
import OtherView from './OtherView';

@Route('$default')
@Route('home')
class DefaultRoute { get view() { return <HomeView />; } };

@Route("other")
class OtherRoute { get view() { return <OtherView />; } };
