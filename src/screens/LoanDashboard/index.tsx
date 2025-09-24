// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import React, { useState } from 'react';
// import { Icons } from '../../themes/Icons';
// import OfferCarousel from '../../components/Carousal';

// // Get screen dimensions
// const { height: screenHeight } = Dimensions.get('window');

// const LoanDashboard = () => {
//   const [isExpanded, setIsExpanded] = useState<boolean>(false);

//   const toggleScrollView = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const headerHeight = screenHeight * 0.09; // Example: 10% of screen height (~70px)

//   return (
//     <View style={{ flex: 1, backgroundColor: '#ffff' }}>
//       {/* Fixed Header */}
//       <View
//         style={{
//           height: headerHeight,
//           width: '100%',
//           backgroundColor: 'white',
//           shadowColor: '#000',
//           justifyContent: 'center',
//           flexDirection: 'row',
//           alignItems: 'center',
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.3,
//           shadowRadius: 10,
//           elevation: 8,
//           zIndex: 100,
//         }}
//       >
//         <TouchableOpacity
//           activeOpacity={0.6}
//           style={{
//             justifyContent: 'center',
//             position: 'absolute',
//             top: headerHeight * 0.35,
//             left: 10,
//             alignItems: 'center',
//           }}
//         >
//           <Icons.arrow2Icon
//             width={20}
//             height={20}
//             style={{ transform: [{ rotate: '180deg' }] }}
//           />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Header</Text>
//       </View>

//       {/* Red Card */}
//       <View
//         style={{
//           width: '92%',
//           marginTop: '10%',
//           height: screenHeight * 0.25,
//           backgroundColor: 'red',
//           alignSelf: 'center',
//           borderRadius: 25,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Text style={{ fontSize: 20, color: '#ffff', textAlign: 'center' }}>
//           Welcome to this{'\n'}Loan Dashboard Page
//         </Text>
//       </View>

//       {/* Carousel */}
//       <View style={{ marginTop: '10%', marginBottom: '5%' }}>
//         <OfferCarousel />
//       </View>

//       {/* ScrollView */}
//       <ScrollView
//         style={{
//           flex: isExpanded ? undefined : 1,
//           position: isExpanded ? 'absolute' : 'relative',
//           top: isExpanded ? headerHeight : undefined,
//           left: isExpanded ? 0 : undefined,
//           right: isExpanded ? 0 : undefined,
//           bottom: isExpanded ? 0 : undefined,
//           backgroundColor: '#fff',
//           overflow: 'hidden',

//           // Remove radius and borders in expanded mode
//           borderTopLeftRadius: isExpanded ? 0 : 25,
//           borderTopRightRadius: isExpanded ? 0 : 25,
//           borderTopWidth: isExpanded ? 0 : 0.3,
//           borderLeftWidth: isExpanded ? 0 : 0.3,
//           borderRightWidth: isExpanded ? 0 : 0.3,
//           borderTopColor: '#767373ff',
//           shadowColor: '#000', // shadow color
//           shadowOffset: { width: 0, height: -4 }, // shadow up (negative height) top side e
//           shadowOpacity: 0.2, // transparency
//           shadowRadius: 6, // blur
//           elevation: 28,

//           zIndex: isExpanded ? 10 : 1,
//           padding: isExpanded ? 15 : 0,
//         }}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: '15%' }}
//         onScrollBeginDrag={() => {
//           if (!isExpanded) setIsExpanded(true);
//         }}
//         scrollEventThrottle={16}
//       >
//         {/* Expand/Collapse Trigger */}
//         <TouchableOpacity
//           onPress={toggleScrollView}
//           style={{
//             marginTop: '6%',
//             width: '8%',
//             alignSelf: 'center',
//             height: 4,
//             backgroundColor: '#615c5cff',
//             borderRadius: 2,
//           }}
//         />

//         {/* Dummy Scroll Content */}
//         {/* {[
//           'brown',
//           'green',
//           'yellow',
//           'pink',
//           'blue',
//           'black',
//           'green',
//           'yellow',
//           'brown',
//           'green',
//           'yellow',
//           'pink',
//           'blue',
//           'black',
//           'green',
//           'yellow',
//           'brown',
//           'green',
//           'yellow',
//           'pink',
//           'blue',
//           'black',
//           'green',
//           'yellow',
//         ].map((color, idx) => (
//           <View
//             key={idx}
//             style={{
//               backgroundColor: color,
//               width: '90%',
//               height: 50,
//               alignSelf: 'center',
//               marginTop: '5%',
//               borderRadius: 8,
//             }}
//           />
//         ))} */}

//         <View
//           style={{
//             backgroundColor: 'brown',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'yellow',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'pink',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'blue',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'black',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'yellow',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>

//         <View
//           style={{
//             backgroundColor: 'black',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'yellow',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'black',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'yellow',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'black',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'yellow',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'black',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'yellow',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'black',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//         <View
//           style={{
//             backgroundColor: 'yellow',
//             width: '90%',
//             height: 50,
//             alignSelf: 'center',
//             marginTop: '5%',
//           }}
//         ></View>
//       </ScrollView>
//     </View>
//   );
// };

// export default LoanDashboard;

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   Dimensions,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import React from 'react';
// import { Icons } from '../../themes/Icons';
// import { styles } from './styles';
// import { emiData } from '../../utils/data';

// const index = () => {
//   const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
//   return (
//     <>
//       <View style={styles.main}>
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.touch}>
//             <Icons.arrow2Icon width={20} height={20} style={styles.arrowIcon} />
//           </TouchableOpacity>
//           <Text style={{ fontSize: 15, color: '#000' }}>Header</Text>
//         </View>
//         <ImageBackground
//           source={Icons.imgbk}
//           style={{
//             marginTop: '5%',
//             alignSelf: 'center',
//             width: screenHeight * 0.4,
//             height: 200,
//             borderRadius: 40,
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
//           <View
//             style={{
//               width: '90%',
//               backgroundColor: '#ffff',
//               height: 65,
//               marginTop: '15%',
//               borderRadius: 15,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               paddingHorizontal: '5%',
//             }}
//           >
//             <View
//               style={{
//                 backgroundColor: 'red',
//                 width: '50%',
//                 height: 40,
//               }}
//             >
//               <Text>Payment For Today</Text>
//               <Text>$ 500</Text>
//             </View>
//             <TouchableOpacity
//               style={{
//                 width: '30%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: 40,
//                 borderRadius: 50,
//                 backgroundColor: '#6819E6',
//               }}
//             >
//               <Text style={{ fontSize: 12, color: '#ffff' }}>Pay Now</Text>
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//         <ImageBackground
//           source={Icons.imgbk}
//           style={{
//             marginTop: '5%',
//             alignSelf: 'center',
//             width: screenHeight * 0.4,
//             height: 200,
//             borderRadius: 40,
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
//           <View
//             style={{
//               width: '90%',
//               backgroundColor: '#ffff',
//               height: 65,
//               marginTop: '15%',
//               borderRadius: 15,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               paddingHorizontal: '5%',
//             }}
//           >
//             <View
//               style={{
//                 backgroundColor: 'red',
//                 width: '50%',
//                 height: 40,
//               }}
//             >
//               <Text>Payment For Today</Text>
//               <Text>$ 500</Text>
//             </View>
//             <TouchableOpacity
//               style={{
//                 width: '30%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: 40,
//                 borderRadius: 50,
//                 backgroundColor: '#6819E6',
//               }}
//             >
//               <Text style={{ fontSize: 12, color: '#ffff' }}>Pay Now</Text>
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//         <ImageBackground
//           source={Icons.imgbk}
//           style={{
//             marginTop: '5%',
//             alignSelf: 'center',
//             width: screenHeight * 0.4,
//             height: 200,
//             borderRadius: 40,
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
//           <View
//             style={{
//               width: '90%',
//               backgroundColor: '#ffff',
//               height: 65,
//               marginTop: '15%',
//               borderRadius: 15,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               paddingHorizontal: '5%',
//             }}
//           >
//             <View
//               style={{
//                 backgroundColor: 'red',
//                 width: '50%',
//                 height: 40,
//               }}
//             >
//               <Text>Payment For Today</Text>
//               <Text>$ 500</Text>
//             </View>
//             <TouchableOpacity
//               style={{
//                 width: '30%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 height: 40,
//                 borderRadius: 50,
//                 backgroundColor: '#6819E6',
//               }}
//             >
//               <Text style={{ fontSize: 12, color: '#ffff' }}>Pay Now</Text>
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={{ flex: 0.5, backgroundColor: 'green' }}>
//         <FlatList
//           data={emiData}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => (
//             <View style={{ width: '90%', alignSelf: 'center', backgroundColor: 'red' }}>
//               <Text>{item.ammount}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </>
//   );
// };

// export default index;

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   Dimensions,
//   FlatList,
// } from 'react-native';
// import React from 'react';
// import { Icons } from '../../themes/Icons';
// import { emiData } from '../../utils/data';

// const Index = () => {
//   const { height: screenHeight } = Dimensions.get('window');

//   // Render EMI card (only green card now)

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Scrollable list */}
//       <FlatList
//         ListHeaderComponent={
//           <>
//             {[1, 2, 3].map(index => (
//               <ImageBackground
//                 key={index}
//                 source={Icons.imgbk}
//                 style={{
//                   marginTop: '5%',
//                   alignSelf: 'center',
//                   width: screenHeight * 0.4,
//                   height: 200,
//                   borderRadius: 40,
//                   overflow: 'hidden',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
//                 <View
//                   style={{
//                     width: '90%',
//                     backgroundColor: '#ffff',
//                     height: 65,
//                     marginTop: '15%',
//                     borderRadius: 15,
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     paddingHorizontal: '5%',
//                   }}
//                 >
//                   <View>
//                     <Text>Payment For Today</Text>
//                     <Text>$ 500</Text>
//                   </View>
//                   <TouchableOpacity
//                     style={{
//                       width: '30%',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       height: 40,
//                       borderRadius: 50,
//                       backgroundColor: '#6819E6',
//                     }}
//                   >
//                     <Text style={{ fontSize: 12, color: '#ffff' }}>
//                       Pay Now
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </ImageBackground>
//             ))}
//           </>
//         }
//         ListFooterComponent={
//           <View style={{ flex: 1, backgroundColor: 'red', paddingVertical: 10 }}>
//             <Text
//               style={{
//                 margin: 16,
//                 fontWeight: 'bold',
//                 fontSize: 16,
//                 color: '#fff',
//               }}
//             >
//               EMI Transactions
//             </Text>
//             {emiData.map(item => (
//               <View
//                 key={item.id}
//                 style={{
//                   width: '90%',
//                   alignSelf: 'center',
//                   backgroundColor: 'green',
//                   marginVertical: 8,
//                   borderRadius: 10,
//                   padding: 10,
//                 }}
//               >
//                 <Text style={{ fontWeight: '600', color: "ffff", fontSize: 16 }}>
//                   {item.day}
//                 </Text>
//                 <Text style={{ fontSize: 14, color: '#fff' }}>
//                   ₹ {item.ammount}
//                 </Text>
//               </View>
//             ))}
//           </View>
//         }
//         data={[]} // we don’t need FlatList data here because EMI handled in footer
//         renderItem={null}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingTop: 60, paddingBottom: 50 }}
//       />

//       {/* Fixed header (always on top) */}
//       <View
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 60,
//           backgroundColor: 'rgba(255,255,255,0.9)',
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingHorizontal: 15,
//           justifyContent: 'space-between',
//         }}
//       >
//         <TouchableOpacity>
//           <Icons.arrow2Icon width={20} height={20} />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 15, color: '#000' }}>Header</Text>
//       </View>
//     </View>
//   );
// };

// export default Index;

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import React from 'react';
// import { Icons } from '../../themes/Icons';
// import { emiData } from '../../utils/data';

// const Index = () => {
//   const { height: screenHeight } = Dimensions.get('window');

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Fixed Header */}
//       <View
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 60,
//           backgroundColor: 'rgba(255,255,255,0.9)',
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingHorizontal: 15,
//           justifyContent: 'space-between',
//           zIndex: 3,
//         }}
//       >
//         <TouchableOpacity>
//           <Icons.arrow2Icon width={20} height={20} />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 15, color: '#000' }}>Header</Text>
//       </View>

//       {/* Fixed Images */}
//       <View style={{ marginTop: 60, alignItems: 'center', zIndex: 0 }}>
//         {[1, 2, 3].map(index => (
//           <ImageBackground
//             key={index}
//             source={Icons.imgbk}
//             style={{
//               marginTop: 20,
//               width: screenHeight * 0.4,
//               height: 200,
//               borderRadius: 40,
//               overflow: 'hidden',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
//             <View
//               style={{
//                 width: '90%',
//                 backgroundColor: '#fff',
//                 height: 65,
//                 marginTop: '15%',
//                 borderRadius: 15,
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 paddingHorizontal: '5%',
//               }}
//             >
//               <View>
//                 <Text>Payment For Today</Text>
//                 <Text>$ 500</Text>
//               </View>
//               <TouchableOpacity
//                 style={{
//                   width: '30%',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   height: 40,
//                   borderRadius: 50,
//                   backgroundColor: '#6819E6',
//                 }}
//               >
//                 <Text style={{ fontSize: 12, color: '#fff' }}>Pay Now</Text>
//               </TouchableOpacity>
//             </View>
//           </ImageBackground>
//         ))}
//       </View>

//       {/* Red scrollable section starts exactly below the last image */}
//       <ScrollView
//         style={{ flex: 1, zIndex: 2 }}
//         contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
//       >
//         <View style={{ backgroundColor: 'red', paddingBottom: 50 }}>
//           <Text
//             style={{
//               margin: 16,
//               fontWeight: 'bold',
//               fontSize: 16,
//               color: '#fff',
//             }}
//           >
//             EMI Transactions
//           </Text>

//           {emiData.map(item => (
//             <View
//               key={item.id}
//               style={{
//                 width: '90%',
//                 alignSelf: 'center',
//                 backgroundColor: 'green',
//                 marginVertical: 8,
//                 borderRadius: 10,
//                 padding: 10,
//               }}
//             >
//               <Text style={{ fontWeight: '600', color: '#fff', fontSize: 16 }}>
//                 {item.day}
//               </Text>
//               <Text style={{ fontSize: 14, color: '#fff' }}>₹ {item.ammount}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Index;

// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import { Icons } from '../../themes/Icons';
// import { emiData } from '../../utils/data';
// import OfferCarousel from '../../components/Carousal'; // your carousel component

// const Index = () => {
//   const { height: screenHeight } = Dimensions.get('window');
//   const imageHeight = 200;
//   const imageMargin = 20;
//   const carouselHeight = 300; // exact height of your OfferCarousel component

//   // Total height of image + carousel + margin
//   const topContentHeight = imageHeight + imageMargin + carouselHeight;

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Header */}
//       <View
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 60,
//           // backgroundColor: 'rgba(255,255,255,0.95)',
//           backgroundColor: "#ffff",
//           flexDirection: 'row',
//           shadowColor: "#000",
//           shadowOffset: {
//             width: 0,
//             height: 4,
//           },
//           shadowOpacity: 0.3,
//           shadowRadius: 10,
//           elevation: 3,
//           alignItems: 'center',
//           paddingHorizontal: 15,
//           justifyContent: 'space-between',
//           zIndex: 3,
//         }}
//       >
//         <TouchableOpacity>
//           <Icons.arrow2Icon width={20} height={20} />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 15, color: '#000' }}>Header</Text>
//       </View>

//       {/* Top Content: Image + Carousel */}
//       <View style={{ marginTop: 60, alignItems: 'center', zIndex: 0 }}>
//         <ImageBackground
//           source={Icons.imgbk}
//           style={{
//             marginTop: imageMargin,
//             width: screenHeight * 0.4,
//             height: imageHeight,
//             borderRadius: 40,
//             overflow: 'hidden',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <TouchableOpacity onPress={()=> console.log("Pressing")
//           }>
//             <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
//           </TouchableOpacity>
//         </ImageBackground>

//         {/* Carousel */}
//         <View style={{ height: carouselHeight, marginTop: 10, width: '100%' }}>
//           <OfferCarousel />
//         </View>
//       </View>

//       {/* Red Scrollable Section */}
//       <ScrollView
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: 2,
//         }}
//         contentContainerStyle={{
//           paddingTop: 60 + topContentHeight, // header + image + carousel
//           paddingBottom: "3%",
//         }}
//         showsVerticalScrollIndicator={false}
//          pointerEvents="box-none"
//       >
//         <View
//         pointerEvents='auto'
//           style={{
//             backgroundColor: 'white',
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//             paddingTop: 20,
//             paddingBottom: 50,
//             borderTopWidth: 0.3,
//             borderRightWidth: 0.3,
//             borderLeftWidth: 0.3,
//           }}
//         >
//           <View style={{backgroundColor: "red"}}>
//             <Text
//             style={{
//               marginHorizontal: 16,
//               fontWeight: 'bold',
//               fontSize: 16,
//               color: '#000',
//             }}
//           >
//             EMI Transactions
//           </Text>
//           </View>

//           {emiData.map((item) => (
//             <View
//               key={item.id}
//               style={{
//                 width: '90%',
//                 alignSelf: 'center',
//                 backgroundColor: 'green',
//                 marginVertical: 8,
//                 borderRadius: 10,
//                 padding: 10,
//               }}
//             >
//               <Text style={{ fontWeight: '600', color: '#fff', fontSize: 16 }}>
//                 {item.day}
//               </Text>
//               <Text style={{ fontSize: 14, color: '#fff' }}>₹ {item.ammount}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Index;


// import React, { useMemo, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   Dimensions,
// } from 'react-native';
// import { Icons } from '../../themes/Icons';
// import { emiData } from '../../utils/data';
// import OfferCarousel from '../../components/Carousal';
// import BottomSheet from '@gorhom/bottom-sheet';

// const Index = () => {
//   const { height: screenHeight } = Dimensions.get('window');
//   const imageHeight = 200;
//   const imageMargin = 20;
//   const carouselHeight = 300;

//   const bottomSheetRef = useRef(null);

//   // bottom sheet snap points (height)
//   const snapPoints = useMemo(() => ['50%', '90%'], []);

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Header */}
//       <View
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 60,
//           backgroundColor: '#fff',
//           flexDirection: 'row',
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.3,
//           shadowRadius: 10,
//           elevation: 3,
//           alignItems: 'center',
//           paddingHorizontal: 15,
//           justifyContent: 'space-between',
//           zIndex: 3,
//         }}
//       >
//         <TouchableOpacity>
//           <Icons.arrow2Icon width={20} height={20} />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 15, color: '#000' }}>Header</Text>
//       </View>

//       {/* Top Content */}
//       <View style={{ marginTop: 60, alignItems: 'center', zIndex: 0 }}>
//         <ImageBackground
//           source={Icons.imgbk}
//           style={{
//             marginTop: imageMargin,
//             width: screenHeight * 0.4,
//             height: imageHeight,
//             borderRadius: 40,
//             overflow: 'hidden',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <TouchableOpacity onPress={() => console.log('Pressing')}>
//             <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
//           </TouchableOpacity>
//         </ImageBackground>

//         {/* Carousel */}
//         <View style={{ height: carouselHeight, marginTop: 10, width: '100%' }}>
//           <OfferCarousel />
//         </View>
//       </View>

//       {/* Bottom Sheet for EMI Transactions */}
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={0} // start from first snap point
//         snapPoints={snapPoints}
//         enablePanDownToClose={false}
//       >
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'white',
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//             paddingTop: 20,
//             paddingBottom: 50,
//           }}
//         >
//           <View style={{ backgroundColor: 'red' }}>
//             <Text
//               style={{
//                 marginHorizontal: 16,
//                 fontWeight: 'bold',
//                 fontSize: 16,
//                 color: '#000',
//               }}
//             >
//               EMI Transactions
//             </Text>
//           </View>

//           {emiData.map((item) => (
//             <View
//               key={item.id}
//               style={{
//                 width: '90%',
//                 alignSelf: 'center',
//                 backgroundColor: 'green',
//                 marginVertical: 8,
//                 borderRadius: 10,
//                 padding: 10,
//               }}
//             >
//               <Text style={{ fontWeight: '600', color: '#fff', fontSize: 16 }}>
//                 {item.day}
//               </Text>
//               <Text style={{ fontSize: 14, color: '#fff' }}>
//                 ₹ {item.ammount}
//               </Text>
//             </View>
//           ))}
//         </View>
//       </BottomSheet>
//     </View>
//   );
// };

// export default Index;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   ScrollView,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import OfferCarousel from '../../components/Carousal';
// import { Icons } from '../../themes/Icons';
// import { emiData } from '../../utils/data';

// export default function Index() {
//   const { width: screenWidth } = Dimensions.get('window');
//   const imageHeight = 200;
//   const carouselHeight = 300;
//   const topContentHeight = imageHeight + carouselHeight;

//   const [yellowTop, setYellowTop] = useState(topContentHeight);

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Icons.arrow2Icon width={20} height={20} />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 15 }}>Header</Text>
//         <View style={{ width: 20 }} />
//       </View>

//       {/* Top content */}
//       <View style={styles.topContent}>
//         <ImageBackground
//           source={Icons.imgbk}
//           style={[styles.image, { width: screenWidth * 0.9, height: imageHeight }]}
//         >
//           <TouchableOpacity onPress={() => console.log('Image pressed')}>
//             <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
//           </TouchableOpacity>
//         </ImageBackground>

//         <View style={{ height: carouselHeight, width: '100%', marginTop: 10 }}>
//           <OfferCarousel />
//         </View>
//       </View>

//       {/* Yellow panel */}
//       <View
//         style={{
//           position: 'absolute',
//           top: yellowTop,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'yellow',
//           zIndex: 1,
//         }}
//       />

//       {/* Scrollable content */}
//       <ScrollView
//         style={{ flex: 1, zIndex: 2 }}
//         contentContainerStyle={{
//           // paddingTop: topContentHeight,
//           paddingHorizontal: 16,
//           paddingBottom: 100,
//         }}
//         showsVerticalScrollIndicator={false}
//         scrollEventThrottle={16}
//         onScroll={(event) => {
//           const scrollY = event.nativeEvent.contentOffset.y;
//           // Yellow sticks to top after scrolling past topContentHeight
//           setYellowTop(Math.max(topContentHeight - scrollY, 0));

//         }}
//       >
//         <View style={{ backgroundColor: 'red', padding: 12, borderRadius: 8 }}>
//           <Text style={{ fontWeight: '700', color: '#fff' }}>EMI Transactions</Text>
//         </View>

//         {emiData.map((item) => (
//           <View
//             key={item.id}
//             style={{
//               width: '100%',
//               backgroundColor: 'green',
//               marginTop: 12,
//               borderRadius: 10,
//               padding: 12,
//             }}
//           >
//             <Text style={{ fontWeight: '600', color: '#fff' }}>{item.day}</Text>
//             <Text style={{ color: '#fff' }}>₹ {item.ammount}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 60,
//     backgroundColor: '#fff',
//     zIndex: 10,
//     elevation: 3,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//   },
//   topContent: {
//     marginTop: 60,
//     alignItems: 'center',
//     paddingBottom: 12,
//   },
//   image: {
//     borderRadius: 20,
//     overflow: 'hidden',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import OfferCarousel from '../../components/Carousal';
import { Icons } from '../../themes/Icons';
import { emiData } from '../../utils/data';

export default function Index() {
  const { width: screenWidth } = Dimensions.get('window');
  const imageHeight = 200;
  const carouselHeight = 300;
  const topContentHeight = imageHeight + carouselHeight;
  const headerHeight = 60;

  const [scrollY, setScrollY] = useState(0);

  // Yellow panel er top position dynamically set hobe
  const yellowTop = topContentHeight - scrollY;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icons.arrow2Icon width={20} height={20} />
        </TouchableOpacity>
        <Text style={{ fontSize: 15 }}>Header</Text>
        <View style={{ width: 20 }} />
      </View>

      {/* Top content (image + carousel) */}
      <View style={styles.topContent}>
        <ImageBackground
          source={Icons.imgbk}
          style={[styles.image, { width: screenWidth * 0.9, height: imageHeight }]}
        >
          <TouchableOpacity onPress={() => console.log('Image pressed')}>
            <Text style={{ fontSize: 30, color: 'white' }}>Hi</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={{ height: carouselHeight, width: '100%', marginTop: 10 }}>
          <OfferCarousel />
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        onScroll={(e) => setScrollY(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={16}
      >
        {/* Yellow panel */}
        <View
          style={{
            position: 'absolute',
            top: yellowTop,
            left: 0,
            right: 0,
            backgroundColor: 'yellow',
            padding: 16,
            zIndex: 1, // header er niche
          }}
        >
          <View style={{ backgroundColor: 'red', padding: 12, borderRadius: 8 }}>
            <Text style={{ fontWeight: '700', color: '#fff' }}>EMI Transactions</Text>
          </View>

          {emiData.map((item) => (
            <View
              key={item.id}
              style={{
                width: '100%',
                backgroundColor: 'green',
                marginTop: 12,
                borderRadius: 10,
                padding: 12,
              }}
            >
              <Text style={{ fontWeight: '600', color: '#fff' }}>{item.day}</Text>
              <Text style={{ color: '#fff' }}>₹ {item.ammount}</Text>
            </View>
          ))}
        </View>

        {/* Spacer to allow scrolling */}
        <View style={{ height: topContentHeight + emiData.length * 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    zIndex: 10,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  topContent: {
    marginTop: 60,
    alignItems: 'center',
    paddingBottom: 12,
  },
  image: {
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
