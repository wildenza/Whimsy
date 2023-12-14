import React, {Suspense} from 'react';
import {Button, Text, View, StyleSheet, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import {Canvas} from "@react-three/fiber/native";
import { useFrame } from '@react-three/fiber/native';
import Model from "./src/components/Model.tsx";

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
          {/*<Text>Settings Screen</Text>
          <Button
              title="Go back"
              onPress={() => {
                navigation.goBack();
              }}
          />*/}

            {/*<Canvas>
                <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial color='orange' />

                </mesh>

            </Canvas>*/}



        </View>
      </View>
  );
}





function RenderScrn({ navigation }) {
  return (
    <View style={styles.containerbase}>
        <View style={styles.modelcontainer}>
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </View>


        <View style={styles.bottomCntr}>
            <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Title</Text>
            <Text style={styles.textDesc}>Ramidaf igwim osdf ield imsdmfi mmasliriwenimimdsdf fosidmf oimsdfim</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => console.log("Next")}>
                    <Text style={styles.textButton}>Next Button</Text>
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


    },

    textTitle:{
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
