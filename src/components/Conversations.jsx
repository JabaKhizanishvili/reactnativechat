import React from 'react'
import { ScrollView } from 'react-native'

import ConversationItem from './ConversationItem';

const Users = [
	{
		picture : "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				username:"Jaba Khizanishvili",
				bio:"my name is Mercy Patrick",
				lastMessage:"Hello there",
				time:"4:00 PM",
	},
	{
		picture : "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				username:"Zura Khizanishvili",
				bio:"my name is Mercy Patrick",
				lastMessage:"Hello there",
				time:"4:00 PM",
	}
]

const Conversations = ({ children }) => {
	return (
		<ScrollView>
			{children}
			{Users.map((e,i)=>{
				return (
					<ConversationItem
				picture={e.picture}
				username={e.username}
				bio={e.bio}
				lastMessage={e.lastMessage}
				time="4:00 PM"
				notification="3"
				isBlocked
				isMuted
				hasStory
			/>
				)

			})
		}
			{/* <ConversationItem
				picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Murphy Patrick"
				bio="my name is Mercy Patrick"
				lastMessage="Hello there"
				time="4:00 PM"
				notification="3"
				isBlocked
				isMuted
				hasStory
			/> */}
			{/* <ConversationItem
				picture="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Mark James"
				bio="my name is Mercy Patrick"
				lastMessage="Hello there"
				time="4:00 PM"
				notification="1"
				isBlocked
				isMuted
				hasStory
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Nina Gomez"
				bio="my name is Mercy Patrick"
				lastMessage="Hello there"
				time="4:00 PM"
				isBlocked
				isMuted
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Jack Randolph"
				bio="my name is Mercy Patrick"
				lastMessage="Hello there"
				time="4:00 PM"
				isBlocked
				isMuted
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Stephany Garcia"
				bio="my name is Mercy Patrick"
				lastMessage="Hello there"
				time="4:00 PM"
				notification="5"
				isBlocked
				isMuted
				hasStory
			/> */}

		</ScrollView>
	)
}

export default Conversations