import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';

export default class MateriScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      kelas: this.props.navigation.getParam('kelas')
    }
  }
  render () {
    const {width, height} = Dimensions.get ('screen');
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        <View
          style={{
            paddingTop: 30,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <View>
            <Text style={{fontSize: 25}}>Materi Kelas {this.state.kelas}</Text>
          </View>
          <View
            style={{
              paddingTop: 20,
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              style={{
                height: 100,
                width: width / 2 - 50,
                marginRight: 15,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#2F954E',
              }}
            >
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Lihat',{
                kd_matpel:'ipa',
                kelas:this.state.kelas
              })} style={{flex: 1, flexDirection: 'column'}}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, textAlign: 'center', color: 'white'}}
                  >
                    IPA
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
                backgroundColor: '#2F954E',
              }}
            >
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Lihat',{
                kd_matpel:'mtk',
                kelas:this.state.kelas
              })} style={{flex: 1, flexDirection: 'column'}}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, textAlign: 'center', color: 'white'}}
                  >
                    MTK
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
                backgroundColor: '#2F954E',
              }}
            >
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Lihat',{
                kd_matpel:'inggris',
                kelas:this.state.kelas
              })} style={{flex: 1, flexDirection: 'column'}}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, textAlign: 'center', color: 'white'}}
                  >
                    B.Inggris
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
                backgroundColor: '#2F954E',
              }}
            >
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Lihat',{
                kd_matpel:'indonesia',
                kelas:this.state.kelas
              })} style={{flex: 1, flexDirection: 'column'}}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, textAlign: 'center', color: 'white'}}
                  >
                    B.Indonesia
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}
