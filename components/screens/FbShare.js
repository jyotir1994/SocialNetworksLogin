import React, { useState, useEffect } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
  TouchableHighlight,
  Button
} from 'react-native';
import { LoginButton, AccessToken, ShareDialog, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { Card, Image } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

const App = () => {

  const [imageFilePath, setImageFilePath] = useState();
  const [videoFilePath, setVideoFilePath] = useState();
  const [profile, setProfile] = useState([]);
  const [profileImage, setProfileImage] = useState();
  const [isLoggedIn, setLoggedIn] = useState(false);
  chooseImage = () => {
    var options = {
      title: 'Select Image',
      mediaType: 'image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Image Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImageFilePath(source.uri)
      }
    });
  };

  chooseVideo = () => {
    var options = {
      title: 'Select video',
      mediaType: 'video',
      videoQuality: 'medium',
      // storageOptions: {
      //   skipBackup: true,
      //   path: 'images',
      // },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Video Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setVideoFilePath('file://' + source.path)
      }
    });
  };

  const SHARE_LINK_CONTENT = {
    contentType: 'link',
    contentUrl: 'https://gaana.com/myfavoritetracks',
  };

  const SHARE_PHOTO_CONTENT = {
    contentType: 'photo',
    photos: [{ imageUrl: imageFilePath }],
  };
  const SHARE_VIDEO_CONTENT = {
    contentType: 'video',
    video: { localUrl: videoFilePath },
  }


  getPublicProfile = async () => {
    const infoRequest = new GraphRequest(
      '/me?fields=id,name,picture',
      null,
      (error, result) => {
        if (error) {
          console.log('Error fetching data: ' + error.toString());
        } else {
          console.log(result);
          setProfile(result);
          setProfileImage(result.picture.data.url);
        }
      }
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  shareLinkWithDialog = async () => {
    const canShow = await ShareDialog.canShow(SHARE_LINK_CONTENT);
    if (canShow) {
      try {
        const { isCancelled, postId } = await ShareDialog.show(
          SHARE_LINK_CONTENT,
        );
        if (isCancelled) {
          Alert.alert('Share cancelled');
        } else {
          Alert.alert('Share success with postId: ' + postId);
        }
      } catch (error) {
        Alert.alert('Share fail with error: ' + error);
      }
    }
  };

  sharePhotoWithDialog = async () => {
    const canShow = await ShareDialog.canShow(SHARE_PHOTO_CONTENT);
    if (canShow) {
      try {
        const { isCancelled, postId } = await ShareDialog.show(
          SHARE_PHOTO_CONTENT,
        );
        if (isCancelled) {
          Alert.alert('Share cancelled');
        } else {
          Alert.alert('Share success with postId: ' + postId);
        }
      } catch (error) {
        Alert.alert('Share fail with error: ' + error);
      }
    }
  };

  shareVideoWithDialog = async () => {
    const canShow = await ShareDialog.canShow(SHARE_VIDEO_CONTENT);
    if (canShow) {
      try {
        const { isCancelled, postId } = await ShareDialog.show(
          SHARE_VIDEO_CONTENT,
        );
        if (isCancelled) {
          Alert.alert('Share cancelled');
        } else {
          Alert.alert('Share success with postId: ' + postId);
        }
      } catch (error) {
        Alert.alert('Share fail with error: ' + error);
      }
    }
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={styles.viewContainer}>
            <LoginButton
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    console.log("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    console.log("login is cancelled.");
                  } else {
                    setLoggedIn(true);
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log(data.accessToken.toString());
                        this.getPublicProfile();
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => {
                console.log("logout.");
                setLoggedIn(false);
              }} />
            {isLoggedIn && <Card
              title={profile.name}>
              <Image
                source={{ uri: profileImage }}
                style={{ width: 50, height: 50 }}
              />
              <TouchableHighlight onPress={this.shareLinkWithDialog} style={styles.shareBtn}>
                <Text style={styles.shareText}>Share link with ShareDialog</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.sharePhotoWithDialog} style={styles.shareBtn}>
                <Text style={styles.shareText}>Share photo with ShareDialog</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.shareVideoWithDialog} style={styles.shareBtn}>
                <Text style={styles.shareText}>Share video with ShareDialog</Text>
              </TouchableHighlight>
              <Button style={{margin: 5}} title="Choose Image" onPress={this.chooseImage.bind(this)} />
              <Button style={styles.chooseBtn} title="Choose video" onPress={this.chooseVideo.bind(this)} />
            </Card>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
  },
  shareBtn: {
    width: '100%',
    justifyContent: 'center',
    margin: 5
  },
  chooseBtn: {
    margin: 5
  },
  shareText: {
    fontSize: 20,
    fontStyle: 'italic'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;