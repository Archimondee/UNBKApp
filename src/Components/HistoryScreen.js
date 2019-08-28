import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native'
import {Card, CardItem, Button, Header, Body, Left, Right, Item, Input } from 'native-base';
import {Ionicons} from 'react-native-vector-icons';
import Reinput from 'reinput';

export default class HistoryScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      tampil : false,
      data: []
    }
  }
  
  getNilai(){
    AsyncStorage.getItem('User',(err, item)=>{
      if(item){
        let hasil = JSON.parse(item);
        console.log(hasil[0].username);
        this.setState({
          username: hasil[0].username
        })
        fetch (
          'https://kumpulan-soal-smp.000webhostapp.com/api_soal/getNilai.php',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
              username: hasil[0].username,
            }),
          }
        )
          .then (response => response.json ())
          .then (responseJson => {
            console.log(responseJson);
            if (responseJson == 'Tidak') {
              alert ('No ujian tidak terdaftar');
              this.setState ({
                tampil: false,
              });
            } else {
              this.setState ({
                data: responseJson,
                tampil: true,
              });
            }
          })
          .catch (err => {
            alert (err);
          });
      }
    })
  }

  componentDidMount(){
    this.getNilai();
  }

  convertHuruf(nilai){
    let nul = nilai;
    let hasil = '';
    if(nul>=85){
      hasil= 'A'
    }else if(nul>=70){
      hasil= 'B'
    }else if(nul>=50){
      hasil= 'C'
    }else if(nul>=20){
      hasil='D'
    }else{
      hasil='E'
    }

    return hasil;
  }

  render() {
    return (
      <View style={{flex:1, paddingTop:30}}>
        <Header style={{backgroundColor:'#071d82'}}>
          <View style={{width:40, justifyContent:'center', alignContent:'center'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white"/>
            </TouchableOpacity>
          </View>
          <Body style={{flexDirection:'row'}}>
            <Text style={{color:'white', fontSize:20}}>Nilai Ujian</Text>
          </Body>
        </Header>
        <View style={{flex:1}}>
          <View style={{ alignContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:23}}>History Peserta Ujian</Text>
          </View>
          {
            !this.state.tampil?(
              null
            ):
              (
                <View style={{flex:1}}>
                <View style={{ alignContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:20}}>No Ujian : {this.state.data[0].no_ujian}</Text>
                </View>
                <View style={{paddingLeft:10, paddingRight:10, paddingTop:10}}>
                  <Card>
                    <View style={{paddingLeft:10, paddingRight:10, paddingTop:15}}>
                      <Text>Nama : {this.state.data[0].nama}</Text>
                      <Text>Kelas : {this.state.data[0].kelas}</Text>
                      <Text>Sekolah : {this.state.data[0].sekolah}</Text>
                    </View>
                    <View style={{paddingBottom:15, paddingTop:15,paddingLeft:10, paddingRight:10}}>
                      <View style={{width:'100%', height:130, flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                          <View style={{flex:0.3, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>No</Text>
                          </View>
                          <View style={{flex:1.5, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>Mata Pelajaran</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>Nilai Angka</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>Nilai Huruf</Text>
                          </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <View style={{flex:0.3, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>1</Text>
                          </View>
                          <View style={{flex:1.5, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>MTK</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{parseInt( this.state.data[0].nilai_mtk )*5 }</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{this.convertHuruf(parseInt( this.state.data[0].nilai_mtk )*5)}</Text>
                          </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <View style={{flex:0.3, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>2</Text>
                          </View>
                          <View style={{flex:1.5, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>IPA</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{parseInt(this.state.data[0].nilai_ipa)*5}</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{this.convertHuruf(parseInt( this.state.data[0].nilai_ipa )*5)}</Text>
                          </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <View style={{flex:0.3, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>3</Text>
                          </View>
                          <View style={{flex:1.5, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>B.Indonesia</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{parseInt(this.state.data[0].nilai_indo)*5}</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{this.convertHuruf(parseInt( this.state.data[0].nilai_indo )*5)}</Text>
                          </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <View style={{flex:0.3, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>4</Text>
                          </View>
                          <View style={{flex:1.5, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>B.Inggris</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{parseInt(this.state.data[0].nilai_inggris)*5}</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{this.convertHuruf(parseInt( this.state.data[0].nilai_inggris )*5)}</Text>
                          </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                          <View style={{flex:0.3, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text></Text>
                          </View>
                          <View style={{flex:1.5, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>Total</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{((parseInt(this.state.data[0].nilai_inggris)*5)+(parseInt(this.state.data[0].nilai_indo)*5)+(parseInt(this.state.data[0].nilai_mtk)*5)+(parseInt(this.state.data[0].nilai_ipa)*5))/4}</Text>
                          </View>
                          <View style={{flex:1, borderBottomColor:'black', borderWidth:1, alignContent:'center',alignItems:'center'}}>
                            <Text>{this.convertHuruf(((parseInt(this.state.data[0].nilai_inggris)*5)+(parseInt(this.state.data[0].nilai_indo)*5)+(parseInt(this.state.data[0].nilai_mtk)*5)+(parseInt(this.state.data[0].nilai_ipa)*5))/4)}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </Card>
                </View>
              </View>
              )
            
              
              
          }
          
          
        </View>
      </View>
    )
  }
}
