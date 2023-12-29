import React, {Suspense, useRef} from 'react';
import {Button, Text, View, StyleSheet, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import {Canvas} from "@react-three/fiber/native";
import { useFrame } from '@react-three/fiber/native';
import Model from "./src/components/Model.tsx";
import useControls from "r3f-native-orbitcontrols"
import { OrbitControls } from '@react-three/drei'
import Room1 from "./src/components/Room1";

const BottomTabs = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Welcome to Whimsy-Viewer</Text>
          <View style={styles.buttonContainer}>
            <Button
                title="Start"
                onPress={() => {
                  navigation.navigate('Settings');
                }}
            />
          </View>
        </View>
      </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Settings Screen</Text>
          <Button
              title="Go back"
              onPress={() => {
                navigation.goBack();
              }}
          />





        </View>
      </View>
  );
}

/*const Cube = () => {
    const cubeRef = useRef();

    // useFrame used = rotate on each frame
    useFrame(() => {

        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
        cubeRef.current.rotation.z += 0.01;
    });

    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color='orange' />
            <ambientLight intensity={3} color='orange' />
            <pointLight intensity={100} color='green' />

        </mesh>
    );
};*/



function RenderScrn({ navigation }) {
    const [OrbitControls, events] = useControls()

    return (
    <View style={styles.containerbase}>

        <View style={styles.modelcontainer}{...events}>

            <Canvas>
                <OrbitControls enablePan={false} />
                <directionalLight position={[1,0,0]} args={['white',3]}/>
                <directionalLight position={[-1,0,0]} args={['teal',4]}/>
                <directionalLight position={[0,1,0]} args={['white',3.5]}/>
                {/*<directionalLight position={[0,-1,0]} args={['white',5]}/>
                <directionalLight position={[0,0,1]} args={['white',5]}/>
                <directionalLight position={[0,0,-1]} args={['white',5]}/>*/}
               {/* <Suspense fallback={null}>
                    <Model />
                </Suspense>*/}

                <Suspense fallback={null}>
                    <Room1/>
                </Suspense>



            </Canvas>
        </View>


        <View style={styles.bottomCntr}>
            <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Room Viewer</Text>
            <Text style={styles.textDesc}>This is a random 3D object which as it seems manages succesfully
            to appear on your humble phone screen</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => console.log("Next")}>
                    <Text style={styles.textButton}>Next</Text>
                </Pressable>
            </View>
        </View>












    </View>


  );
}





export default function App() {
  return (
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                    <MaterialIcons name="home" size={24} color="orange" />
                ),
              }}
          />
          <BottomTabs.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                    <MaterialIcons name="settings" size={24} color="orange" />
                ),
              }}
          />
          <BottomTabs.Screen
              name={"Render"}
              component={RenderScrn}
              options={{
                headerShown:false,
                tabBarIcon: () => (<MaterialIcons name={"home"} size={24} color="orange"  />
                ),
              }}
              />
        </BottomTabs.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    containerbase: {
        flex:1,
        backgroundColor:'orange',
    },
    modelcontainer: {

        flex:2,
        display : 'flex',
        border : `1px solid red`,
        /*height: 400,*/
        backgroundColor:'wheat',
        width:'100%',
        //alignItems:'center',
        //justifyContent:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        margin : `0 auto`



    },
    textContainer :{
      margin:20,
        marginBottom:0,

        alignItems:'center',



    },

    textTitle:{
        justifyContent:'center',
        alignItems:'center',
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',


    },

    textDesc: {
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginVertical: 10,

    },

    button:{
        backgroundColor: 'white',
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24


    },
    textButton:{
      color:'black',
      fontSize:18,
      fontWeight:'bold',


    },
    btnContainer:{
        marginHorizontal: 20,
        marginBottom: 20,



    },


    bottomCntr: {
        flex:1,
        backgroundColor:'orange',
        bottom:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'space-between',


    },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'wheat',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginHorizontal:20,
      marginBottom:20,
  },
});
