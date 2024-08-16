
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList } from 'react-native';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../src/config/firebaseConfig';

// const AdminHomePage = ({ navigation }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersCollection = collection(db, 'users');
//       const userSnapshot = await getDocs(usersCollection);
//       const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setUsers(userList);
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={users}
//         renderItem={({ item }) => (
          
//           <View>
//             <Text>{item.name}</Text>
//             <Button
//               title="View Details"
//               onPress={() => navigation.navigate('UserDetailsPage', { userId: item.id })}
//             />
//           </View>
//         )}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// export default AdminHomePage;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../src/config/firebaseConfig';

const AdminHomePage = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      const userDoc = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        setAttendance(docSnap.data().attendance || []);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <View>
      <FlatList
        data={attendance}
        renderItem={({ item }) => (
          <View>
            <Text>Date: {item.date}</Text>
            <Text>Sign In Time: {item.signInTime || 'Absent'}</Text>
            <Text>Sign Out Time: {item.signOutTime || 'Not Signed Out'}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AdminHomePage;
