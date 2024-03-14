import {StausBar } from 'expo-status-bar';
import React, {Component } from 'react ';
import {
    Stylesheet,
    Text,
    View,
    safeAreaView,
    Platform,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {Camera} from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Filter from '../components/Filter1';
export default class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermissios:  null,
            faces: [], 
        };
this.state.onfaceDetected = this.onFacesDetected.bind(this);

    }
    async componentDidMount(){
        const {status} = await Camera.requestPermissionsAsync();
    this.setState({ hasCameaPermission: status === 'granted'})
    }
    render() {
        var {hasCameaPermission} = this.state;
        if (hasCameaPermission=== null){
            return<View/>;  
        }
        if (hasCameaPermission === false ){
            return(
                <View style = {style.container}>
                    <Text>no access to camera </Text>
                </View>
            );

        }
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.upperContainer}>
                <Image source={require('../assets/appIcon.png')} style={styles.appIcon} />
                <Text style={styles.appName}>Look Me....</Text>
            </View>
            <View style={styles.middleContainer}></View>
        )
    }
}