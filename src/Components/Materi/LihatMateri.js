import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {Constants} from 'expo';
export default class LihatMateri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materi: this.props.navigation.getParam('kd_matpel'),
      kelas: this.props.navigation.getParam('kelas'),
      hasil: '',
      q: '',
      data: []
    };
  }
  
  componentWillMount(){
    const {materi} = this.state;
    if(materi=='ipa'){
      this.setState({
        hasil:'Ipa',
        q:'IPA'
      })
    }else if(materi=='indonesia'){
      this.setState({
        hasil:'B.Indonesia',
        q:'INDONESIA'
      })
    }else if(materi=='inggris'){
      this.setState({
        hasil:'B.Inggris',
        q:'INGGRIS'
      })
    }else if(materi=='mtk'){
      this.setState({
        hasil:'Mtk',
        q:'MTK'
      })
    }
    
  }
  componentDidMount(){
    this.getMateri();
  }
  
  getMateri(){
    const {q, kelas, hasil} = this.state;
    console.log("Ini adalah hasil "+hasil)
    fetch ('https://kumpulan-soal-smp.000webhostapp.com/api_soal/getMateri.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        category:q,
        kelas:kelas
      }),
    })
      .then (response => response.json ())
      .then (responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        })
        console.log(this.state.data)
      });

  }

  openWeb(uri){
    let url = uri
    Linking.openURL(url)
  }

  render() {
    return (
      <View style={{flex:1, paddingTop:30}}>
        <Header style={{backgroundColor:'#071d82'}}>
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
          <View style={{flex:1, flexDirection:'column'}}>
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
            {this.state.data.map((items, i)=>{ return(
              <View key={i} style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:0.5, borderRightWidth:1, borderRightColor:'black', alignItems:'center', borderBottomColor:'black', borderBottomWidth:1, height:40, justifyContent:'center'}}>
                  <Text>{i}</Text>
                </View>
                <View style={{flex:1.5,borderRightWidth:1, borderRightColor:'black', alignItems:'center', borderBottomColor:'black', borderBottomWidth:1, height:40,justifyContent:'center'}}>
                  <Text>{items.file_name}</Text>
                </View>
                <View style={{flex:1,borderRightWidth:1, borderRightColor:'black', alignItems:'center', borderBottomColor:'black', borderBottomWidth:1, height:40,justifyContent:'center'}}>
                  <Text>{items.file_type}</Text>
                </View>
                <View style={{flex:1, alignItems:'center', borderBottomColor:'black', borderBottomWidth:1, height:40,justifyContent:'center'}}>
                  <Button onPress={()=>this.openWeb(items.uri)} style={{height:30, width:70, alignItems:'center', alignContent:'center', justifyContent:'center', backgroundColor:'#071d82'}}>
                    <Text style={{color:'white'}}>Download</Text>
                  </Button>
                </View>
              </View>
            )
              
            })}
            
            
          </View>
        </View>
          
          
        </ScrollView>
      </View>
    );
  }
}
