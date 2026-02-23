// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   PermissionsAndroid,
//   Platform,
//   ActivityIndicator,
// } from 'react-native';
// import Contacts from 'react-native-contacts';

// const ContactListScreen = () => {
//   const [contacts, setContacts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const requestPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   useEffect(() => {
//     const loadContacts = async () => {
//       const permission = await requestPermission();
//       if (!permission) {
//         setLoading(false);
//         return;
//       }

//       const allContacts = await Contacts.getAll();
//       console.log("TOTAL:", allContacts.length);

//       setContacts(allContacts);
//       setLoading(false);
//     };

//     loadContacts();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>
//         Contacts ({contacts.length})
//       </Text>

//       <FlatList
//         data={contacts}
//         keyExtractor={(item) => item.recordID}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={styles.name}>{item.displayName}</Text>
//             {item.phoneNumbers.map((num: any, index: any) => (
//               <Text key={index} style={styles.number}>
//                 {num.number}
//               </Text>
//             ))}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default ContactListScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
//   card: { padding: 12, backgroundColor: '#fff', marginBottom: 8, borderRadius: 8 },
//   name: { fontSize: 16, fontWeight: '600' },
//   number: { fontSize: 14, color: 'gray' },
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

const SimpleChart = () => {
  const dataSets = {
    '1D': [
      {value: 100},
      {value: 110},
      {value: 105},
      {value: 120},
    ],
    '1W': [
      {value: 80},
      {value: 90},
      {value: 95},
      {value: 110},
      {value: 130},
    ],
    '1M': [
      {value: 50},
      {value: 70},
      {value: 90},
      {value: 150},
      {value: 200},
    ],
  };

  const [selected, setSelected] = useState('1D');

  return (
    <View style={{flex: 1, padding: 20}}>
      
      <Text style={{fontSize: 20, marginBottom: 20}}>
        Selected: {selected}
      </Text>

      <LineChart
        data={dataSets[selected]}
        thickness={3}
        color="green"
        curved
        areaChart
        hideDataPoints
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        {['1D', '1W', '1M'].map(item => (
          <TouchableOpacity
          activeOpacity={0.98}
            key={item}
            onPress={() => setSelected(item)}
            style={{
              padding: 10,
              backgroundColor:
                selected === item ? 'black' : 'lightgray',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color:
                  selected === item ? 'white' : 'black',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SimpleChart;