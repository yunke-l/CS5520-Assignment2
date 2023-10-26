import { FlatList, View } from 'react-native'
import Entry from './Entry';
import GlobalStyles from '../styles/StylesHelper';


export default function EntriesList({entries}) {
    return (
        <View style={GlobalStyles.entriesListContainer}>
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

