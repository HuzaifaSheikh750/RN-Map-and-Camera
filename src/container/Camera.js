import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera';


const Camera = () => {
    const [open, setOpen] = useState(false)
    const [uri, seturi] = useState("");

    const camera = useRef(null);
    const take_picture = async () => {
        const options = { quality: 0.5, base64: true };
        const data = await camera.current.takePictureAsync(options);
        seturi(data.uri)
        setOpen(false)
        console.log(data.uri);
    }

    return (
        <View style={{ flex: 1 }}>

            {open ?
                <RNCamera
                    flashMode={RNCamera.Constants.FlashMode.off}
                    ref={camera}

                    style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
                />
                : null}

            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={take_picture} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
            </View> 

            <TouchableOpacity onPress={() => setOpen(true)}>
                <Text style={{ fontSize: 20 }}>OPEN CAMERA</Text>
            </TouchableOpacity>

            {uri ? <Image source={{ uri: uri }} style={{ width: "30%", height: '30%' }} /> : null}

        </View>

    )
}

const styles = StyleSheet.create({
    capture:{
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    }
})

export default Camera;
