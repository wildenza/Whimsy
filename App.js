import React, { Suspense, useRef, useEffect, useState } from 'react';
import {Button, Text, View, StyleSheet, Pressable, Animated, Image, TextInput, ScrollView, Linking} from 'react-native';
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
import Wld3 from "./src/components/wld3";
import Green from "./src/components/Green";
import orange from "./src/components/orange";
import LottieView from 'lottie-react-native';
import anim1 from './src/assets/anim1.json';
const BottomTabs = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    const [slideAnim1] = useState(new Animated.Value(-1000));
    const [slideAnim2] = useState(new Animated.Value(-1000));
    //ptr githb
    const openGithub = () => {
        Linking.openURL('https://github.com/wildenza/Whimsy');
    };
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
                <LottieView
                    style={{ width: 200, height: 200 , top:50,}}
                    source={anim1}
                    autoPlay
                    loop
                />
                <Text style={styles.welcome}>Whimsy Viewer</Text>
            </Animated.View>
            <Animated.View style={[styles.descriptionContainer, { transform: [{ translateY: slideAnim2 }] }]}>
                <Text style={styles.descriptionText}>
                    <Text style={{ color: 'orange' }}>Whimsy Viewer</Text>
                    {" is a simple app about camping made for the GDSC Club from Timisoara, its purpose is to display certain information for various camping/eco-tracks"}
                </Text>
            </Animated.View>
            <Pressable style={styles.githubButton} onPress={openGithub}>
                <MaterialIcons name="open-in-new" size={24} color="white" />
            </Pressable>

            <LottieView
                style={{ width: 200, height: 200 }}
                source={anim1}
                autoPlay
                loop
            />
            {/*<Image source={require('./src/assets/cat.gif')}*/}
            {/*  <LottieView style={{width:200,}}source={require('../path/to/animation.json')} autoPlay loop />*/}
            {/* gif
          <Image source={{uri: 'https://giphy.com/gifs/vibes-vibing-vibin-GeimqsH0TLDt4tScGw'}} style={styles.cat} />*/}


            {/*  nu asta*/}
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
            {/*<View>
                <Image source={{ uri : "https://giphy.com/gifs/vibes-vibing-vibin-GeimqsH0TLDt4tScGw"}} />
            </View>*/}
        </View>
    );
}

function RenderScrn({ navigation }) {
    const [OrbitControls, events] = useControls();
    const [showRoom1, setShowRoom1] = useState(true);
    const [showWld3, setShowWld3] = useState(false);
    const [showGreen, setShowGreen] = useState(false);
    const [campgrounds, setCampgrounds] = useState([]);
    const [currentCampgroundIndex, setCurrentCampgroundIndex] = useState(0);
    const [currentCampgroundName, setCurrentCampgroundName] = useState('');
    const [currentCampgroundDescription, setCurrentCampgroundDescription] = useState('');

    useEffect(() => {
        fetchCampgrounds();
    }, []);

    const fetchCampgrounds = () => {
        fetch('https://developer.nps.gov/api/v1/campgrounds?api_key=qsGkWvVypuPGOM2dlejVpOHTIPQXGHBljXLqHhqt')
            .then(response => response.json())
            .then(json => {
                const campgroundsData = json.data.slice(0, 20);
                setCampgrounds(campgroundsData);
                setCurrentCampgroundIndex(0); // Reset to the first campground when fetching new data
                setCurrentCampgroundName(campgroundsData[0]?.name || '');
                setCurrentCampgroundDescription(campgroundsData[0]?.description || '');
            })
            .catch(error => console.error(error));
    };

    const getNextCampground = () => {
        setCurrentCampgroundIndex(prevIndex => (prevIndex + 1) % campgrounds.length);
        setCurrentCampgroundName(campgrounds[currentCampgroundIndex]?.name || '');
        setCurrentCampgroundDescription(campgrounds[currentCampgroundIndex]?.description || '');
    };

    const toggleComponents = () => {
        if (showRoom1) {
            setShowRoom1(false);
            setShowWld3(true);
            setShowGreen(false);
        } else if (showWld3) {
            setShowWld3(false);
            setShowGreen(true);
        } else {
            setShowGreen(false);
            setShowRoom1(true);
        }
    };

    return (
        <View style={styles.containerbase}>
            <View style={styles.modelcontainer} {...events}>
                <Canvas>
                    <OrbitControls enablePan={false} />
                    <directionalLight position={[1,0,0]} args={['white',3]}/>
                    <directionalLight position={[-1,0,0]} args={['teal',4]}/>
                    <directionalLight position={[0,1,0]} args={['white',3.5]}/>
                    <Suspense fallback={null}>
                        {showRoom1 && <Room1 />}
                        {showWld3 && <Wld3 />}
                        {showGreen && <Green/>}
                    </Suspense>
                </Canvas>
            </View>
            <View style={styles.bottomCntr}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Campsite Viewer</Text>
                        <Text style={styles.textDesc}>
                            {currentCampgroundName && currentCampgroundDescription ?
                                `Name: ${currentCampgroundName}\nDescription: ${currentCampgroundDescription}` :
                                null
                            }
                        </Text>
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={() => { getNextCampground(); toggleComponents(); }}>
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
                {/*<BottomTabs.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <MaterialIcons name="settings" size={24} color="orange" />
                        ),
                    }}
                />*/}
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
        backgroundColor:'#131b24',
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

        color:'white',
        backgroundColor:'orange',
        borderRadius:20,
        fontSize:40,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    cat:{

        height:100,
        width:100,
        bottom:400,
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
        backgroundColor:'#131b24',
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
        top:20,
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
