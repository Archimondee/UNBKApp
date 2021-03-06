import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native'
import {Card} from 'native-base';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  _logout(){
    AsyncStorage.clear()
    this.props.navigation.navigate('Login');
  }

  render() {
    const {width, height} = Dimensions.get('screen');
    return (
      <View style={{flex:1, paddingTop:30}}>
        <View style={{paddingTop:30, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          <View>
            <Text style={{fontSize:25}}>UNBK App</Text>
          </View>
          <View style={{
                paddingTop:20,
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#071d82'
                }}
              >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Materi',{kelas:'7'})} style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Kelas 7
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#071d82'
                }}
              >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Materi',{kelas:'8'})} style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Kelas 8
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#071d82'
                }}
              >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Materi',{kelas:'9'})} style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Kelas 9
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#071d82'
                }}
              >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Soal')} style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Latihan Soal
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#071d82'
                }}
              >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tips')} style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Tips & Trik
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#071d82'
                }}
              >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('History')} style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Riwayat
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
              <Card
                style={{
                  height: 100,
                  width: width / 2 - 50,
                  marginRight: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor:'#071d82'
                }}
              >
                <TouchableOpacity onPress={()=>this._logout()} style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color:'white' }}>
                      Logout
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
          </View>
        </View>
      </View>
    )
  }
}
