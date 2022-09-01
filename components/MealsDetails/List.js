import {View ,Text, StyleSheet} from 'react-native';
function List ({data}) {
    return data.map((dataPoint) => (
    <View style={styles.ListItem} key={dataPoint} >
        
    <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
      ));
}

export default List;
const styles = StyleSheet.create({
    ListItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 8,
        marginVertical: 4,
        backgroundColor:'#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
});