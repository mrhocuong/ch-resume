import { FC } from 'react';
import Style from '../styles/pages/ChatWithMe.module.scss';
import avatar from '../assets/avatar.jpg';
import devAvatar from '../assets/dev-avarta.jpeg';

interface IMessageModel {
  senderId: number;
  senderName: string;
  message: string;
}
const ChatWithMe: FC = () => {
  const userId = 1;
  const chatConst: IMessageModel[] = [
    {
      senderId: userId,
      senderName: 'Cuong Ho',
      message: 'hello',
    },
    {
      senderId: userId + 1,
      senderName: 'Guest',
      message: 'hello back',
    },
    {
      senderId: userId,
      senderName: 'Cuong Ho',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      senderId: userId + 1,
      senderName: 'Guest',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum back`,
    },
  ];
  const renderMessage = (message: IMessageModel) => {
    return (
      <div className={Style.chatMessage}>
        <div className={Style.avatar}>
          {message.senderId === userId ? (
            <img src={avatar} alt={avatar} />
          ) : (
            <img src={devAvatar} alt={devAvatar} />
          )}
        </div>
        <div className={Style.content}>
          <div className={Style.sender}>{message.senderName}</div>
          <div className={Style.message}> {message.message}</div>
        </div>
      </div>
    );
  };
  return (
    <div className={Style.chatWithMe}>
      <div className={Style.chatHeader}>
        <p>Chat With Me</p>
      </div>
      <div className={Style.chatSection}>
        {chatConst.map((message) => renderMessage(message))}
      </div>
      <div className={Style.chatInput}>
        <input type='text' placeholder='Type your message here' />
      </div>
    </div>
  );
};
export default ChatWithMe;
