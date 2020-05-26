import TodoList from '../screens/todo-list';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// createStackNavigator() crée l'arbre de navigation
// Le premier écran déclaré est l'écran de démarrage par défaut de l'application (ici LoginScreen)
const MainStackNavigator = createStackNavigator(
  {
    TodoList: {screen: TodoList},
  },
  {
    headerMode: 'screen', // Ce paramètre spécifie qu'on va définir des "header" (en-tête pour chaque écran
    // grâce à la variable "navigationOptions"
  },
);
export default createAppContainer(MainStackNavigator);
