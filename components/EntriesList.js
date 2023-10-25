import { FlatList, StyleSheet, View } from 'react-native'

import Entry from './Entry';

export default function EntriesList({entries}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={entries}
                renderItem={({item}) => {
                    return (
                        <Entry entry={item} />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        minWidth: '80%'
    }
});