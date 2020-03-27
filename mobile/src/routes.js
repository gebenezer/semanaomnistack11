import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Stack = createStackNavigator();

//Paginas
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const Routes = createAppContainer(
    createSwitchNavigator({ Incidents, Detail })
);

export default Routes;