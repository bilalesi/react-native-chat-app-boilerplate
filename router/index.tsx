import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import { connect } from "react-redux";
import BackHandlerHOC from '../components/HOC/BackHandlerHOC';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ChatList from '../pages/ChatList';
import ChatDetails from '../pages/ChatDetails';
import ChatProfileDetail from '../pages/ChatProfileDetail';
import ChatSetting from '../pages/ChatSetting';
import { ApplicationConfig } from '../config/DefaultConfig';
import ConfigContext from '../config/AppConfigProvider';
import ThemedView from '../components/UI/ThemedView';

interface Props {
  configReducer: ApplicationConfig
}

const Router: React.FunctionComponent<Props> = ({
  configReducer
}: Props) => {
  return (
    <ConfigContext.Provider value={configReducer}>
      <ThemedView style={style.container}>
        <NativeRouter>
          <BackHandlerHOC>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/chatlist" component={ChatList} />
              <Route exact path="/chat/" component={ChatDetails} />
              <Route exact path="/profile" component={ChatProfileDetail} />
              <Route exact path="/settings" component={ChatSetting} />
            </Switch>
          </BackHandlerHOC>
        </NativeRouter>
      </ThemedView>
    </ConfigContext.Provider>
  )
}

export default connect(({ configReducer }) => ({ configReducer }))(Router);

interface Style {
  container: ViewStyle
}

const style: Style = StyleSheet.create<Style>({
  container: {
      flex: 1
  }
})

