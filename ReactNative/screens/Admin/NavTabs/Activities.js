import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Activities extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Activities tab</Text>
			</View>
		)
	}
}

export default Activities

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
})
