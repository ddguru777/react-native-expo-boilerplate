import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Loading from "../containers/LoadingContainer";
import Login from "../containers/LoginContainer";
import App from "./AppNavigator";

const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      Loading: Loading,
      App: App,
      Login: Login,
    },
    {
      initialRouteName: "Loading"
    }
  );
};
  

export default createAppContainer(createRootNavigator());
