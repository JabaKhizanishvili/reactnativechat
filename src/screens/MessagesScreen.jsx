import React, { useState } from "react";
import { View, Text } from "react-native";

import ChatHeader from "../components/messages/ChatHeader";
import ChatInput from "../components/messages/ChatInput";
import MessagesList from "../components/messages/MessagesList";

const MessagesScreen = ({ navigation, route }) => {
	const { username, bio, picture, isBlocked, isMuted } = route.params;
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};

	return (
		<View style={{ flex: 1 }}>
			<ChatHeader
				onPress={() => {navigation.goBack()}}
				username={username}
				picture={picture}
				onlineStatus={'Online'}
			/>
			<MessagesList onSwipeToReply={swipeToReply} />
			<ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={username} />
		</View>
	);
};

export default MessagesScreen;
