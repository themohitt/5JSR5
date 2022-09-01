import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color, onPress, }) {

    return (
        <View style={styles.gridItem }>
            <Pressable android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button, 
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, 
                    {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4, // for android
        backgroundColor: 'white', // for ios
        shadowColor: 'black', // for ios
        shadowOpacity: 0.25, // for ios
        shadowOffset: { width: 0, height: 2 }, // for ios
        shadowRadius: 8, // for ios
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});