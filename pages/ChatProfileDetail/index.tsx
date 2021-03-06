import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import ChatProfile from '../../components/Chat/ChatProfile';
import ChatProfileInfo from '../../components/Chat/ChatProfileInfo';
import ChatProfileMedia from '../../components/Chat/ChatProfileMedia';

const ChatProfileDetail: React.FunctionComponent<RouteComponentProps> = ({
    history
}: RouteComponentProps) => {
      
    const goToChatList = () => {
        history.goBack()
    } 

    return (
        <>
        <ChatProfileInfo
          userImageSource={{ uri: "https://recraftrelic.com/images/Recraft_relic_web_logo_icon.png" }}
          userName="Manoj Singh Negi"
          status="All is Well"
          onButtonPress={goToChatList}
        />
        <ChatProfileMedia
          source={{ uri: `https://picsum.photos/200?time=${new Date().getTime()}` }}
        />
        <ChatProfile
          block="Block"
          report="Report"
          deleteConversation="Delete Conversation"
        />
        </>
    );
}

export default ChatProfileDetail;
