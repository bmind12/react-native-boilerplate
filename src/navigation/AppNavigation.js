import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import HomeScreen from 'screens/HomeScreen'

const AppNavigator = createSwitchNavigator({
    Home: {
        screen: HomeScreen
    }
})

export default createAppContainer(AppNavigator)
