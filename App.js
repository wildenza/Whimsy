import React, { Suspense, useRef, useEffect, useState } from 'react';
import {Button, Text, View, StyleSheet, Pressable, Animated, Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Canvas } from "@react-three/fiber/native";
import { useFrame } from '@react-three/fiber/native';
import Model from "./src/components/Model.tsx";
import useControls from "r3f-native-orbitcontrols"
import { OrbitControls } from '@react-three/drei'
import Room1 from "./src/components/Room1";
import {image} from 'react-native';
import {wld3} from "./src/components/wld3";

const BottomTabs = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    const [slideAnim1] = useState(new Animated.Value(-1000));
    const [slideAnim2] = useState(new Animated.Value(-1000));
    const [data, setData] = useState(null);
    useEffect(() => {
        Animated.timing(
            slideAnim1,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }
        ).start(() => {
            Animated.timing(
                slideAnim2,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }
            ).start();
        });
        fetch('https://developer.nps.gov/api/v1/campgrounds?api_key=qsGkWvVypuPGOM2dlejVpOHTIPQXGHBljXLqHhqt')
            .then(response => response.json())
            .then(json => setData(json.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.content, { transform: [{ translateY: slideAnim1 }] }]}>
                <Text style={styles.welcome}>Welcome to Eco Viewer</Text>
            </Animated.View>
            <Animated.View style={[styles.descriptionContainer, { transform: [{ translateY: slideAnim2 }] }]}>
                <Text style={styles.descriptionText}>
                     Eco  Viewer is an app about nature made for the GDSC University club from Romania,the purpose of it it's to display
                    certain information for the camping/eco-tracks
                </Text>
            </Animated.View>
            {/*{data && data.slice(0, 5).map((campground, index) => (
                <Text key={index}>{campground.name}</Text>
            ))}*/}
        </View>
    );
}

function SettingsScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [slideAnim1] = useState(new Animated.Value(-1000));
    const [slideAnim2] = useState(new Animated.Value(-1000));
    const [currentCampgroundIndex, setCurrentCampgroundIndex] = useState(0);

    useEffect(() => {
        fetch('https://developer.nps.gov/api/v1/campgrounds?api_key=qsGkWvVypuPGOM2dlejVpOHTIPQXGHBljXLqHhqt')
            .then(response => response.json())
            .then(json => setData(json.data.slice(0, 20)))
            .catch(error => console.error(error));
    }, []);

    const getNextCampground = () => {
        setCurrentCampgroundIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.availCamp}>Available Campgrounds</Text>
            </View>
            <View>
                <View style={styles.campgroundItem}>
                    <Text>Name: {data[currentCampgroundIndex]?.name}</Text>
                    <Text>Description: {data[currentCampgroundIndex]?.description}</Text>

                </View>
            </View>
            <Pressable style={styles.nextButton} onPress={getNextCampground}>
                <Text style={styles.textButton}>Next Campsite</Text>
            </Pressable>
        </View>
    );
}

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
                    <Suspense fallback={null}>
                        <Room1/>
                        <wld3/>
                    </Suspense>
                </Canvas>
            </View>
            <View style={styles.bottomCntr}>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Room Viewer</Text>
                    <Text style={styles.textDesc}>
                        This is a random 3D object which as it seems manages successfully to appear on your humble phone screen
                    </Text>
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
                    name={"Viewer"}
                    component={RenderScrn}
                    options={{
                        headerShown:false,
                        tabBarIcon: () => (<MaterialIcons name={"nature"} size={35} color="green"  />
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
        backgroundColor:'wheat',
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    textContainer :{
        margin:20,
        marginBottom:0,
        alignItems:'center',
    },
    availCamp:{
        fontSize:30,
        textAlign:'center',



    },
    textTitle:{

        justifyContent:'center',
        alignItems:'center',
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
    },
    welcome:{


        fontSize:40,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    cat:{
        height:200,
        width:200,
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
        padding:100,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
    },
    buttonContainer: {
        marginHorizontal:20,
        marginBottom:20,
    },
    descriptionContainer: {
        padding:20,
        backgroundColor:'white',
        borderRadius:20,
        marginBottom:150,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionText: {
        justifyContent:'center',
        alignItems:'center',
        fontSize: 20,
        textAlign: 'center',
    },
    campgroundItem: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 10,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center',

    },
    campgroundName: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    campgroundDescription: {
        fontSize: 30,
        textAlign: 'center',

    },
});
