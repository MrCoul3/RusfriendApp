import {View, Text} from "react-native";
import React, {useState, useEffect} from "react";
import {storage} from "./Home";
import texts from '../texts.json';
import a1t1 from '../assets/A1Text1.mp3';
import playBtn from '../assets/play-button.png';
import pauseBtn from '../assets/pause-button.png';
import {TouchableWithoutFeedback} from "react-native-web";
import {styles, simpleStyles} from "../styles";
import { Audio } from 'expo-av';


// const audio = new Audio(a1t1);
// let timer = null;

export default function TextReaderPage() {

    const [data] = texts;
    const [text, setText] = useState();
    const [group, setGroup] = useState(storage.group) ;
    const [currentID, SetCurrentID] = useState(storage.id) ;
    const [playing, setPlaying] = useState('pause');
    const [timing, setTiming] = useState(0);

    const [sound, setSound] = React.useState();

    // useEffect(()=> {
    //
    //     // data[`${group}`].filter(({id}) => id === currentID).body
    //     if (playing === 'play') {
    //         console.log({audio})
    //         console.log(audio.duration)
    //         audio.play()
    //         timer = setInterval(()=> {
    //             setTiming(audio.currentTime)
    //             // console.log(audio.currentTime)
    //         }, 10)
    //     } else {
    //         clearInterval(timer)
    //         audio.pause();
    //     }
    //     console.log(playing)
    // }, [playing])


    const textRender = () => data[`${group}`].filter(({id}) => id === currentID)[0].body;



    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/A1Text1.mp3')
        );
        setSound(sound);
        console.log(sound)
        console.log('Playing Sound');
        await sound.playAsync();
        setPlaying('play')
    }

    async function pauseSound() {
        console.log('pause');
        await sound.pauseAsync();

    }


    useEffect(()=> {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); }
            : undefined;
    }, [sound])


    return (
      <View>
          <View style={{height: '10px', backgroundColor: '#c45a5a', width: timing*50+'px'}}>

          </View>
          <Text>
              {textRender()}
          </Text>
          {/*<TouchableWithoutFeedback onPress={()=>playing === 'pause' ? setPlaying('play') : setPlaying('pause')}>*/}
          {/*    <View style={{width: '40px'}}>*/}
          {/*        <img src={playing === 'pause' ? playBtn : pauseBtn} alt=""/>*/}
          {/*    </View>*/}
          {/*</TouchableWithoutFeedback>*/}
          <TouchableWithoutFeedback onPress={playSound}>
              <View style={{width: '40px'}}>
                  <img src={playing === 'pause' ? playBtn : pauseBtn} alt=""/>
              </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={pauseSound}>
              <View style={{width: '40px'}}>
                  <img src={playBtn} alt=""/>
              </View>
          </TouchableWithoutFeedback>
      </View>
    );
}