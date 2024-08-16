
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../src/config/firebaseConfig';

// const UserDetailsPage = ({ route }) => {
//   const { userId } = route.params;
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const userDoc = doc(db, 'users', userId);
//       const docSnap = await getDoc(userDoc);
//       if (docSnap.exists()) {
//         setUserDetails(docSnap.data());
//       }
//     };

//     fetchUserDetails();
//   }, [userId]);

//   return (
//     <View>
//       {userDetails ? (
//         <View>
//           <Text>Name: {userDetails.name}</Text>
//           <Text>Sign In Time: {userDetails.signInTime || 'Not Signed In'}</Text>
//           <Text>Sign Out Time: {userDetails.signOutTime || 'Not Signed Out'}</Text>
//         </View>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// };

// export default UserDetailsPage;
