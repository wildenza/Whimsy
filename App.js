import React, {Suspense} from 'react';
import {Button, Text, View, StyleSheet, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import {Canvas} from "@react-three/fiber/native";
import Model from "./src/components/Model";

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





function RenderScrn({ navigation }) {
  return (
      <View style={styles.containerRender}>
        <View style={styles.modelContainer}>
            <Canvas style={{position: 'absolute'}}>

                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>

        </View>
            <View style={styles.bottomContainer}>
                <View style={styles.textContainer}>
                <Text style={styles.textTitle}>Unit 1 : Human Kings-guard</Text>
                <Text style={styles.textDesc}>typical human warrior capabilities,native to the Leyhart Empire</Text>
                </View>
            </View>




          <View style={styles.btnContainer}>
              <Pressable style={styles.NextButton} onPress={ ()=> console.log('NXT')}>
                  <Text style={styles.textNextButton}> Next </Text>

              </Pressable>

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
    containerRender: {
        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    },
    modelContainer: {
        top:'75%',
        flex:1,
        backgroundColor:'wheat',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,



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
        color:'white',
        marginVertical: 10,

    },

    NextButton:{
      backgroundColor:'white',
        padding:18,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:24,
        top:'-350%',


    },
    textNextButton:{
      color:'black',
      fontSize:18,
      fontWeight:'bold',


    },
    /*btnContainer:{
    marginHorizontal:20,
        marginBottom:20,
        backgroundColor:'red',


    },*/

    bottomContainer: {
        flex:1,
        backgroundColor:'wheat',
        bottom:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,


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
    marginTop: 20,
  },
});
