// import React, { useEffect, useRef, useState } from "react";
// import { View, Dimensions, StyleSheet } from "react-native";
// import Svg, {
//   Rect,
//   Ellipse,
//   Circle,
//   Path,
//   G,
//   Text as SvgText,
//   Rect as SvgRect,
// } from "react-native-svg";

// const { width } = Dimensions.get("window");

// const DESIGN_WIDTH = 1470;
// const DESIGN_HEIGHT = 1080;
// const height = (width * DESIGN_HEIGHT) / DESIGN_WIDTH;

// /* ================= CONFIG ================= */
// const CENTER_X = 760;
// const CENTER_Y = 560;
// const ROTATION_DEG = -10;
// const ROT = (ROTATION_DEG * Math.PI) / 180;

// /* ================= ORBIT POSITION ================= */
// function orbitPosition(rx, ry, angle) {
//   const x = rx * Math.cos(angle);
//   const y = ry * Math.sin(angle);

//   // rotate ellipse correctly
//   const xr = x * Math.cos(ROT) - y * Math.sin(ROT);
//   const yr = x * Math.sin(ROT) + y * Math.cos(ROT);

//   return {
//     x: CENTER_X + xr,
//     y: CENTER_Y + yr,
//   };
// }

// /* ================= HOOK ================= */
// function useOrbit(rx, ry, speed, startAngle) {
//   const angleRef = useRef(startAngle);
//   const [position, setPosition] = useState(
//     orbitPosition(rx, ry, startAngle)
//   );

//   useEffect(() => {
//     let frame;

//     const animate = () => {
//       angleRef.current += speed;

//       if (angleRef.current > Math.PI * 2) {
//         angleRef.current -= Math.PI * 2;
//       }

//       setPosition(
//         orbitPosition(rx, ry, angleRef.current)
//       );

//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(frame);
//   }, [rx, ry, speed]);

//   return position;
// }

// /* ================= UNIVERSAL ORBIT ITEM ================= */
// function OrbitItem({ rx, ry, speed, startAngle, children }) {
//   const pos = useOrbit(rx, ry, speed, startAngle);

//   return (
//     <G x={pos.x} y={pos.y}>
//       {children}
//     </G>
//   );
// }

// /* ================= DOT ================= */
// function OrbitDot({ rx, ry, speed, startAngle, radius }) {
//   const pos = useOrbit(rx, ry, speed, startAngle);

//   return (
//     <Circle
//       cx={pos.x}
//       cy={pos.y}
//       r={radius}
//       fill="#E5D8F7"
//     />
//   );
// }

// /* ================= R LOGO ================= */
// function OrbitRLogo(props) {
//   return (
//     <OrbitItem {...props}>
//       <Circle cx="0" cy="0" r="52" fill="#EEE4FA" />

//       <Path
//         d="
//           M-14 -27
//           L-14 28
//           M-14 -27
//           H6
//           Q20 -27 20 -12
//           Q20 2 6 4
//           H-14
//           M4 5
//           L20 28
//         "
//         stroke="#6A1BDB"
//         strokeWidth="6"
//         fill="none"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </OrbitItem>
//   );
// }

// /* ================= REPORT ================= */
// function OrbitReport(props) {
//   return (
//     <OrbitItem {...props}>
//       {/* Bigger outer circle */}
//       <Circle cx="0" cy="0" r="68" fill="#EEE4FA" />

//       {/* Bigger report box */}
//       <SvgRect
//         x="-22"
//         y="-28"
//         width="44"
//         height="56"
//         rx="6"
//         stroke="#6A1BDB"
//         strokeWidth="3.5"
//         fill="none"
//       />

//       {/* Bigger chart line */}
//       <Path
//         d="M-14 10 L-5 -2 L4 6 L14 -8"
//         stroke="#6A1BDB"
//         strokeWidth="3.5"
//         fill="none"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />

//       {/* Bigger bottom line */}
//       <Path
//         d="M-12 18 H12"
//         stroke="#6A1BDB"
//         strokeWidth="3"
//         strokeLinecap="round"
//       />
//     </OrbitItem>
//   );
// }

// /* ================= RUPEE ================= */
// function OrbitRupee(props) {
//   return (
//     <OrbitItem {...props}>
//       <Circle cx="0" cy="0" r="54" fill="#EEE4FA" />

//       <SvgText
//         x="0"
//         y="18"
//         fontSize="54"
//         fontWeight="bold"
//         fill="#6A1BDB"
//         textAnchor="middle"
//       >
//         ₹
//       </SvgText>
//     </OrbitItem>
//   );
// }

// /* ================= CASH ================= */
// function OrbitCash(props) {
//   return (
//     <OrbitItem {...props}>
//       <Circle cx="0" cy="0" r="52" fill="#EEE4FA" />

//       <SvgRect
//         x="-26"
//         y="-16"
//         width="52"
//         height="32"
//         rx="4"
//         stroke="#6A1BDB"
//         strokeWidth="3"
//         fill="none"
//       />

//       <Circle
//         cx="0"
//         cy="0"
//         r="8"
//         stroke="#6A1BDB"
//         strokeWidth="3"
//         fill="none"
//       />

//       <Circle cx="-15" cy="0" r="3" fill="#6A1BDB" />
//       <Circle cx="15" cy="0" r="3" fill="#6A1BDB" />
//     </OrbitItem>
//   );
// }

// /* ================= MONEY BAG ================= */
// function OrbitMoneyBag(props) {
//   return (
//     <OrbitItem {...props}>
//       <Circle cx="0" cy="0" r="30" fill="#EEE4FA" />

//       <Path
//         d="M-16 -34 Q0 -50 16 -34"
//         stroke="#6A1BDB"
//         strokeWidth="4"
//         fill="none"
//         strokeLinecap="round"
//       />

//       <Path
//         d="M-10 -28 H10"
//         stroke="#6A1BDB"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />

//       <Path
//         d="
//           M-20 -22
//           Q-42 0 -30 32
//           Q0 62 30 32
//           Q42 0 20 -22
//           Z
//         "
//         stroke="#6A1BDB"
//         strokeWidth="4"
//         fill="none"
//       />

//       <SvgText
//         x="0"
//         y="22"
//         fontSize="32"
//         fontWeight="bold"
//         fill="#6A1BDB"
//         textAnchor="middle"
//       >
//         ₹
//       </SvgText>
//     </OrbitItem>
//   );
// }

// /* ================= MAIN ================= */
// export default function PerfectOrbitFinanceDesign() {
//   return (
//     <View style={styles.container}>
//       <Svg
//         width={width}
//         height={height}
//         viewBox={`0 0 ${DESIGN_WIDTH} ${DESIGN_HEIGHT}`}
//       >
//         {/* Background */}
//         <Rect
//           width={DESIGN_WIDTH}
//           height={DESIGN_HEIGHT}
//           fill="#F3F3F3"
//         />

//         {/* Static Orbit Paths */}
//         {[715, 580, 445, 265].map((rx, i) => (
//           <Ellipse
//             key={i}
//             cx={CENTER_X}
//             cy={CENTER_Y}
//             rx={rx}
//             ry={[315, 250, 185, 110][i]}
//             stroke="#E5D8F7"
//             strokeWidth="3"
//             fill="none"
//             transform={`rotate(${ROTATION_DEG} ${CENTER_X} ${CENTER_Y})`}
//           />
//         ))}

//         {/* ================= MOVING DOTS ================= */}
//         <OrbitDot rx={715} ry={315} speed={0.002} startAngle={0} radius={11} />
//         <OrbitDot rx={715} ry={315} speed={0.002} startAngle={3.14} radius={11} />

//         <OrbitDot rx={580} ry={250} speed={0.003} startAngle={1.2} radius={10} />
//         <OrbitDot rx={580} ry={250} speed={0.003} startAngle={4.5} radius={10} />

//         <OrbitDot rx={445} ry={185} speed={0.004} startAngle={2.2} radius={10} />
//         <OrbitDot rx={445} ry={185} speed={0.004} startAngle={5.4} radius={10} />

//         <OrbitDot rx={265} ry={110} speed={0.005} startAngle={0.8} radius={9} />

//         {/* ================= MOVING ICONS ================= */}
//         <OrbitRLogo
//           rx={580}
//           ry={250}
//           speed={0.003}
//           startAngle={3.8}
//         />

//         <OrbitReport
//           rx={445}
//           ry={185}
//           speed={0.004}
//           startAngle={5.1}
//         />

//         <OrbitRupee
//           rx={715}
//           ry={315}
//           speed={0.002}
//           startAngle={5.8}
//         />

//         <OrbitCash
//           rx={715}
//           ry={315}
//           speed={0.002}
//           startAngle={2.4}
//         />

//         <OrbitMoneyBag
//           rx={265}
//           ry={110}
//           speed={0.005}
//           startAngle={3.2}
//         />
//       </Svg>
//     </View>
//   );
// }

// /* ================= STYLES ================= */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F3F3",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });



import React, { useEffect, useRef, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Svg, {
  Rect,
  Ellipse,
  Circle,
  Path,
  G,
  Text as SvgText,
  Rect as SvgRect,
} from 'react-native-svg';

const { width } = Dimensions.get('window');

const DESIGN_WIDTH = 1470;
const DESIGN_HEIGHT = 1080;
const height = (width * DESIGN_HEIGHT) / DESIGN_WIDTH;

/* ================= CONFIG ================= */
/* ================= CONFIG ================= */
const CENTER_X = 760;
const CENTER_Y = 560;
const ROTATION_DEG = -10;
const ROT = (ROTATION_DEG * Math.PI) / 180;

/* FULL SYSTEM SCALE (smaller full orbit structure) */
const ORBIT_SCALE = 0.78;

/* ================= ORBIT POSITION ================= */
function orbitPosition(rx, ry, angle) {
  /* Scale ALL orbit paths inward */
  const scaledRx = rx * ORBIT_SCALE;
  const scaledRy = ry * ORBIT_SCALE;

  const x = scaledRx * Math.cos(angle);
  const y = scaledRy * Math.sin(angle);

  /* Keep exact orbit tilt */
  const xr = x * Math.cos(ROT) - y * Math.sin(ROT);
  const yr = x * Math.sin(ROT) + y * Math.cos(ROT);

  return {
    x: CENTER_X + xr,
    y: CENTER_Y + yr,
  };
}

/* ================= HOOK ================= */
function useOrbit(rx, ry, speed, startAngle) {
  const angleRef = useRef(startAngle);
  const [position, setPosition] = useState(orbitPosition(rx, ry, startAngle));

  useEffect(() => {
    let frame;

    const animate = () => {
      angleRef.current += speed;

      if (angleRef.current > Math.PI * 2) {
        angleRef.current -= Math.PI * 2;
      }

      setPosition(orbitPosition(rx, ry, angleRef.current));

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [rx, ry, speed]);

  return position;
}

/* ================= UNIVERSAL ORBIT ITEM ================= */
function OrbitItem({ rx, ry, speed, startAngle, children }) {
  const pos = useOrbit(rx, ry, speed, startAngle);

  return (
    <G x={pos.x} y={pos.y}>
      {children}
    </G>
  );
}

/* ================= DOT ================= */
function OrbitDot({ rx, ry, speed, startAngle, radius }) {
  const pos = useOrbit(rx, ry, speed, startAngle);

  return <Circle cx={pos.x} cy={pos.y} r={radius} fill="#E5D8F7" />;
}

/* ================= R LOGO ================= */
function OrbitRLogo(props) {
  return (
    <OrbitItem {...props}>
      <Circle cx="0" cy="0" r="52" fill="#EEE4FA" />

      <Path
        d="
          M-14 -27
          L-14 28
          M-14 -27
          H6
          Q20 -27 20 -12
          Q20 2 6 4
          H-14
          M4 5
          L20 28
        "
        stroke="#6A1BDB"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </OrbitItem>
  );
}

/* ================= REPORT ================= */
function OrbitReport(props) {
  return (
    <OrbitItem {...props}>
      {/* Bigger outer circle */}
      <Circle cx="0" cy="0" r="68" fill="#EEE4FA" />

      {/* Bigger report box */}
      <SvgRect
        x="-22"
        y="-28"
        width="44"
        height="56"
        rx="6"
        stroke="#6A1BDB"
        strokeWidth="3.5"
        fill="none"
      />

      {/* Bigger chart line */}
      <Path
        d="M-14 10 L-5 -2 L4 6 L14 -8"
        stroke="#6A1BDB"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bigger bottom line */}
      <Path
        d="M-12 18 H12"
        stroke="#6A1BDB"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </OrbitItem>
  );
}

/* ================= RUPEE ================= */
function OrbitRupee(props) {
  return (
    <OrbitItem {...props}>
      <Circle cx="0" cy="0" r="54" fill="#EEE4FA" />

      <SvgText
        x="0"
        y="18"
        fontSize="54"
        fontWeight="bold"
        fill="#6A1BDB"
        textAnchor="middle"
      >
        ₹
      </SvgText>
    </OrbitItem>
  );
}

/* ================= CASH ================= */
function OrbitCash(props) {
  return (
    <OrbitItem {...props}>
      <Circle cx="0" cy="0" r="52" fill="#EEE4FA" />

      <SvgRect
        x="-26"
        y="-16"
        width="52"
        height="32"
        rx="4"
        stroke="#6A1BDB"
        strokeWidth="3"
        fill="none"
      />

      <Circle
        cx="0"
        cy="0"
        r="8"
        stroke="#6A1BDB"
        strokeWidth="3"
        fill="none"
      />

      <Circle cx="-15" cy="0" r="3" fill="#6A1BDB" />
      <Circle cx="15" cy="0" r="3" fill="#6A1BDB" />
    </OrbitItem>
  );
}

/* ================= MONEY BAG ================= */
function OrbitMoneyBag(props) {
  return (
    <OrbitItem {...props}>
      <Circle cx="0" cy="0" r="30" fill="#EEE4FA" />

      <Path
        d="M-16 -34 Q0 -50 16 -34"
        stroke="#6A1BDB"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      <Path
        d="M-10 -28 H10"
        stroke="#6A1BDB"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <Path
        d="
          M-20 -22
          Q-42 0 -30 32
          Q0 62 30 32
          Q42 0 20 -22
          Z
        "
        stroke="#6A1BDB"
        strokeWidth="4"
        fill="none"
      />

      <SvgText
        x="0"
        y="22"
        fontSize="32"
        fontWeight="bold"
        fill="#6A1BDB"
        textAnchor="middle"
      >
        ₹
      </SvgText>
    </OrbitItem>
  );
}

/* ================= MAIN ================= */
export default function PerfectOrbitFinanceDesign() {
  return (
    <View style={styles.container}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${DESIGN_WIDTH} ${DESIGN_HEIGHT}`}
      >
        {/* Background */}
        <Rect width={DESIGN_WIDTH} height={DESIGN_HEIGHT} fill="#ffff" />

        {/* Static Orbit Paths */}
        {/* {[715, 580, 445, 265].map((rx, i) => (
          <Ellipse
            key={i}
            cx={CENTER_X}
            cy={CENTER_Y}
            rx={rx}
            ry={[315, 250, 185, 110][i]}
            stroke="#E5D8F7"
            strokeWidth="3"
            fill="none"
            transform={`rotate(${ROTATION_DEG} ${CENTER_X} ${CENTER_Y})`}
          />
        ))} */}

        {[715, 580, 445, 265].map((rx, i) => (
          <Ellipse
            key={i}
            cx={CENTER_X}
            cy={CENTER_Y}
            rx={rx * ORBIT_SCALE}
            ry={[315, 250, 185, 110][i] * ORBIT_SCALE}
            stroke="#E5D8F7"
            strokeWidth="3"
            fill="none"
            transform={`rotate(${ROTATION_DEG} ${CENTER_X} ${CENTER_Y})`}
          />
        ))}
        {/* ================= MOVING DOTS ================= */}
        <OrbitDot rx={715} ry={315} speed={0.002} startAngle={0} radius={11} />
        <OrbitDot
          rx={715}
          ry={315}
          speed={0.002}
          startAngle={3.14}
          radius={11}
        />

        <OrbitDot
          rx={580}
          ry={250}
          speed={0.003}
          startAngle={1.2}
          radius={10}
        />
        <OrbitDot
          rx={580}
          ry={250}
          speed={0.003}
          startAngle={4.5}
          radius={10}
        />

        <OrbitDot
          rx={445}
          ry={185}
          speed={0.004}
          startAngle={2.2}
          radius={10}
        />
        <OrbitDot
          rx={445}
          ry={185}
          speed={0.004}
          startAngle={5.4}
          radius={10}
        />

        <OrbitDot rx={265} ry={110} speed={0.005} startAngle={0.8} radius={9} />

        {/* ================= MOVING ICONS ================= */}
        <OrbitRLogo rx={580} ry={250} speed={0.003} startAngle={3.8} />

        <OrbitReport rx={445} ry={185} speed={0.004} startAngle={5.1} />

        <OrbitRupee rx={715} ry={315} speed={0.002} startAngle={5.8} />

        <OrbitCash rx={715} ry={315} speed={0.002} startAngle={2.4} />

        <OrbitMoneyBag rx={265} ry={110} speed={0.005} startAngle={3.2} />
      </Svg>
    </View>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
