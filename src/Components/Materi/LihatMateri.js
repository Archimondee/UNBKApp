import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {Constants} from 'expo';

export default class LihatMateri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materi: this.props.navigation.getParam('kd_matpel'),
      kelas: this.props.navigation.getParam('kelas'),
      hasil: ''
    };
  }
  
  componentWillMount(){
    const {materi} = this.state;
    if(materi=='ipa'){
      this.setState({
        hasil:'Ipa'
      })
    }else if(materi=='indonesia'){
      this.setState({
        hasil:'B.Indonesia'
      })
    }else if(materi=='inggris'){
      this.setState({
        hasil:'B.Inggris'
      })
    }else if(materi=='mtk'){
      this.setState({
        hasil:'Mtk'
      })
    }
  }

  render() {
    return (
      <View style={{flex:1, paddingTop:30}}>
        <Header style={{backgroundColor:'#2F954E'}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={{color:'white'}}>Materi {this.state.hasil} kelas {this.state.kelas} </Text>
          </Body>
        </Header>
        <ScrollView style={{flex:1}}>
        <View style={{flex:1, borderWidth:1, borderColor:'black', marginLeft:10, marginRight:10, marginTop:10}}>
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:0.5, borderRightWidth:1, borderRightColor:'black', alignItems:'center', borderBottomColor:'black', borderBottomWidth:1, height:40, justifyContent:'center'}}>
                <Text>No</Text>
              </View>
              <View style={{flex:1.5,borderRightWidth:1, borderRightColor:'black', alignItems:'center', borderBottomColor:'black', borderBottomWidth:1, height:40,justifyContent:'center'}}>
                <Text>Nama File</Text>
              </View>
              <View style={{flex:1,borderRightWidth:1, borderRightColor:'black', alignItems:'center', borderBottomColor:'black', borderBottomWidth:1, height:40,justifyContent:'center'}}>
                <Text>Ukuran</Text>
              </View>
              <View style={{flex:1, alignItems:'center', borderBottomColor:'black', borderBottomWidth:1, height:40,justifyContent:'center'}}>
                <Text>Download</Text>
              </View>
            </View>
          </View>
        </View>
          
          
        </ScrollView>
      </View>
    );
  }
}
