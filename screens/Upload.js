import React, {Component} from 'react';
import { ActionSheet, Button, Root} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'; 

import {View,
        Text,
        StyleSheet,
        FlatList,
        Dimensions,
        TouchableOpacity,
        Image
} from 'react-native';  

const width = Dimensions.get('window').width;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FileList: []
        }
    }

    onSelectedImage = (image) => {
        let newDataImg = this.state.FileList;
        const source = {uri: image.path};
        let item = {
            id: Date.now(),
            uri: source,
            content: image.data
        }
        newDataImg.push(item);
        this.setState ({FileList: newDataImg})

    };
    
    takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    };

    choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.onSelectedImage(image);
            console.log(image);
        });
    };

    onClickAddimage = () => {
        const BUTTONS = ['ถ่ายรูปภาพ', 'เลือกรูปจากอัลบั้ม', 'ยกเลิก'];
        ActionSheet.show(
            {options: BUTTONS, cancelButtonIndex: 2, title: 'เลิอกรูปภาพ'},
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        this.takePhotoFromCamera();
                        break;
                        case 1:
                            this.choosePhotoFromLibrary();
                            break;
                                default:
                                    break
                }
            }
        )
    };

    renderItem = ({item, index}) => {
        return (
            <View>
                <Image source={item.url} style={styles.itemImage} />

            </View>
        )
    };

    render() {
        let {content} = styles;
        let {FileList} = this.state;
        return (
            <Root>
                <View style={content}>
                <Text>อัพโหลดรูปภาพอย่างน้อย 4 รูป</Text>
            <FlatList   
                data={FileList}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                extraData={this.state}
            />

            <TouchableOpacity onPress={this.onClickAddimage} style={btnPressStyle}>
                <Text style={txtStyle}>กดเพื่อเพิ่มรูปภาพ</Text>
            </TouchableOpacity>
            </View>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 500,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30
    },
    btnPressStyle: {
        backgroundColor: '#0080ff',
        height: 50,
        width: width - 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtStyle: {
        color: '#fffff'
    },
    itemImage: {
        backgroundColor: '#2F455C',
        height: 150,
        width: width - 60,
        borderRadius: 8,
        resizeMode: 'contain'

    }
});