import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.item, backgroundColor: '#C9C9FF' }}>
        <Text style={styles.text}>Purple: #C9C9FF</Text>
      </View>

      <View style={{ ...styles.item, backgroundColor: '#3D85C6' }}>
        <Text style={styles.text}>Blue: #3D85C6</Text>
      </View>

      <View style={{ ...styles.item, backgroundColor: '#96CC96' }}>
        <Text style={styles.text}>Green: #96CC96</Text>
      </View>

      <View style={{ ...styles.item, backgroundColor: '#F4B940' }}>
        <Text style={styles.text}>Yellow: #F4B940</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 20
  },
  item: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '500'
  }
})

export default App