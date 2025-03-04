/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Question1 from './src/question-1';
import UseMemoQuestion from './src/useMemo/use_memo';
import UseContextPractice from './src/useContext';
import RegisterPage from './src/auth';

AppRegistry.registerComponent(appName, () => RegisterPage);
