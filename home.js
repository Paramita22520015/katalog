import * as React from 'react';
import { View, Text, Stylesheet, Button, Image, Flatlist } from 'react-native';
import { Card } from 'react-native-paper' ;
import Karyawan from '../Karyawan';

const Home = ({navigation}) =>{
    const [data, setData] = React.useState(Karyawan);

    const listKaryawan = ({item}) => {
        return(
            <Card Style={styles.Cardutama} onPress={()=>navigation.navigate('Detail',
            {Karyawan:item})}>
            <View style={Style.cardView}>
                <Image style={{width:50, height:50, boarderRadius:50/2}}
                source={{uri:item.foto}}/>
            <View style={{marginleft:12}}>
                <Text style={styles.teks}>{item.nama}</Text>
                <Text style={styles.teks}>{item.jabatan}</Text>
                </View>
          </View>
          </Card>      
        )
    }

return (
    <View Style={{flex:1}}>
        <Flatlist
        data={data}
        renderItem={listKaryawan}
        keyExtractor={item=>item.id}
        />
        </View>
);
}

const styles = Stylesheet.create({
    CardUtama: {
        margin:5,
        shadowColor:'#470000',
        shadowOffSet: {width:0, height:2},
        shadowOpacity:0.2
    },
    cardView: {
        flexDirection:'row',
        padding:6
    },
    teks: { fontSize:16 }
});
export default Home;