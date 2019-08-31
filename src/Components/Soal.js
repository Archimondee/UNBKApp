import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity, AsyncStorage} from 'react-native';
import {Card} from 'native-base';


export default class MateriScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      nama: '',
      no_ujian: '',
      username: '',
      data: [],
      soal: [],
      duty: true
    };
  }

  componentDidMount(){
    this.getSoal ();
    //console.log(this.updateSoal());
  }

  // componentDidUpdate(previousProps, previousState){
  //   //console.log("State sebelumnya : "+previousState.data.nilai_indo)
  //   let duty = false
  //   const {data} = this.state;
  //   //console.log(this.updateSoal());
  //   AsyncStorage.getItem('User',(err, item)=>{
  //     if(item){
  //       let hasil = JSON.parse(item);
  //       //console.log(hasil[0].username);
  //       this.setState({
  //         username: hasil[0].username
  //       })
  //       fetch (
  //         'https://kumpulan-soal-smp.000webhostapp.com/api_soal/getNilai.php',
  //         {
  //           method: 'POST',
  //           headers: {
  //             Accept: 'application/json',
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify ({
  //             username: hasil[0].username,
  //           }),
  //         }
  //       )
  //         .then (response => response.json ())
  //         .then (responseJson => {
  //           if(previousState.data.nilai_indo != data.nilai_indo){
  //             this.setState({
  //               data : responseJson
  //             })
  //             console.log('A')
  //           }
  //           if(previousState.data.nilai_mtk != data.nilai_mtk){
  //             this.setState({
  //               data : responseJson
  //             })
  //             console.log("B")
  //           }
  //         })
  //         .catch (err => {
  //           alert (err);
  //         });
  //     }
  //   })

  //   if(duty==false){
      
  //   }
  // }

  updateSoal(){
    var hasilJson = [];
    
  }

  getPertanyaan (js) {
    var jenis_soal = js
    const {username} = this.state 
    fetch (
      'https://kumpulan-soal-smp.000webhostapp.com/api_soal/getSoal.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
          jenis_soal: jenis_soal,
        }),
      }
    )
      .then (response => response.json ())
      .then (responseJson => {
        //console.log(responseJson);
        this.setState ({
          soal: responseJson,
        });
        //console.log(this.state.username);
        this.props.navigation.navigate('Soals',{
          soal: responseJson,
          username: username,
          kd_matpel: jenis_soal
        })
        //console.log (this.state.soal[0]);
      });
  }

  getSoal(){
    AsyncStorage.getItem('User',(err, item)=>{
      if(item){
        let hasil = JSON.parse(item);
        //console.log(hasil[0].username);
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
            //console.logconsole.log(responseJson);
            if (responseJson == 'Tidak') {
              alert ('No ujian tidak terdaftar');
              this.setState ({
                tampil: false,
              });
            } else {
              this.setState ({
                data: responseJson[0],
                nama: responseJson[0].nama,
                username: responseJson[0].username
              });
              //console.log(responseJson)
              //console.log(this.state.data.nilai_mtk)
              //console.log("DATA"+this.state.data)
              //console.log("Nama : "+this.state.data[0].nama)
            }
          })
          .catch (err => {
            alert (err);
          });
      }
    })
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
          <View style={{paddingBottom:60}}>
            <Text style={{fontSize:25}}>Hello, {this.state.nama}</Text>
          </View>
          <View
            style={{
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
                backgroundColor: '#071d82',
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.getPertanyaan('mtk')}
                style={{flex: 1, flexDirection: 'column'}}
              >
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
                backgroundColor: '#071d82',
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.getPertanyaan('ipa')}
                style={{flex: 1, flexDirection: 'column'}}
              >
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
                backgroundColor: '#071d82',
              }}
            >
              <TouchableOpacity
                onPress={() =>this.getPertanyaan('indonesia')}
                style={{flex: 1, flexDirection: 'column'}}
              >
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

            <Card
              style={{
                height: 100,
                width: width / 2 - 50,
                marginRight: 15,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#071d82',
              }}
            >
              <TouchableOpacity
                onPress={() => this.getPertanyaan('inggris')}
                style={{flex: 1, flexDirection: 'column'}}
              >
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

         
          </View>
        </View>
      </View>
    );
  }
}
