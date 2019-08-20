import React, {Component} from 'react';
import {Container, Header, Content, Accordion, Body} from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native'
import {Ionicons} from 'react-native-vector-icons';

const dataArray = [
  {title: '1. Persiapan yang matang', content: 'Persiapan yang matang dalam menghadapi UNBK adalah hal yang paling utama. Jika persiapan kamu sudah matang maka kamu akan lebih siap dan lebih percaya diri dalam menjawab soal. Di saat siswa yang memiliki perisapan yang kurang, maka dia akan mudah terpengaruh dengan jawaban temannya. Namun, jika kamu sudah mempersiapkan diri dengan baik, rasa percaya diri kamu akan meningkat bahkan tidak mudah terpengaruh dengan kunci jawaban yang belum tentu kebenarannya.'},

  {title: '2. Datang tepat waktu', content: 'Datang tepat waktu adalah salah satu cara agar kamu bisa tenang dalam menjawab soal UNBK. Usahakan 15 menit sebelum ujian berlangsung kamu sudah tiba di sekolah, jangan sampai kamu datang terlambat, bisa-bisa kamu gak konsentrasi dalam menjawab soal.\n Bagaimana pun persiapan kamu sudah matang, jika datang terlambat. Materi yang sudah kamu kuasai bakal buyar, karena masalah yang tadi, yaitu datang terlambat. Terlambat bisa mengakibatkan semuanya jadi amburadul. Konsentrasi dan fokus kalian bakal terganggu.'},

  {title: '3. Ikuti prosedur UNBK', content: 'Setelah datang tepat waktu, hal yang perlu kalian perhatikan adalah, mengikuti prosedur UNBK tersebut. Misalnya gini, saat 15 menit pertama biasanya kita diberikan waktu untuk mengisi biodata. Nah, lakukanlah sesuatu sesuai prosedur jangan mentang-mentang kalian lebih dulu selesai langsung menjawab soal atau mengerjakan hal lain yang tidak disarankan oleh pengawas.\n Selain hal di atas, prosedur yang perlu kalian lakukan adalah mentaati peraturan saat UNBK, misalnya kalian tidak boleh membawa HP, mencontek, bekerjasama dan hal lainnya yang  dilarang oleh panitia. Jangan sampai kalian melakukan hal-hal yang dilarang'},

  {title:'4. Bawa jam atau arloji', content:'Kalau bawa HP dilarang, tapi kalau bawa jam kamu gak bakal dilarang deh. Apa sih gunanya kita bawa jam kak? Manfaatnya adalah kamu bisa mengatur strategi dalam menjawab soal UNBK. Emang UNBK harus pakai strategi ya? Yups..Strategi dalam menjawab soal UNBK itu penting banget, selain kita bisa memanajemen waktu yang baik, tepat, dan efisien dalam menjawab soal.'},

  {title:'5. Dahulukan yang mudah', content:'Untuk menghindari kamu agar tidak terpaku dengan satu soal saja, kamu harus mendahulukan soal yang kamu anggap gampang terlebih dahulu. Jadi, tidak mesti kamu menjawab secara berurutan dari nomor 1 hingga nomor 40. Untuk menghemat waktu dalam mengerjakan soal tersebut kamu dahulukan soal yang kamu anggap mudah terlebih dahulu baru beranjak ke soal yang kamu anggap sulit. Kalau soalnya sulit sebaiknya kamu skip aja, cari soal yang mudah, soal yang sulit nanti kamu jawab saat-saat terakhir.'},

  {title:'6. Periksa lembar jawabanmu', content:'Saat ujian UNBK, sama halnya dengan ujian berbasis kertas. Jika soal yang kamu jawab sudah habis, periksa kembali lembar jawaban kamu, jangan sampai ada soal yang terlewatkan. Dan, jika masih ada jawaban kamu yang keliru kamu bisa menggantinya sebelum menekan tombol ‘selesai’. Jika kamu sudah menekan ‘selesai’ jawaban tidak bisa diganti lagi, jadi periksalah lembar jawaban kamu sebaik mungkin baru mengumpulkannya. Mengumpulkan jawaban saat UNBK adalah, ketika kamu menekan tombol ‘selesai’ tadi.' },

  {title:'7. Berdoa', content:'Yang terakhir adalah berdo’a. Jika semuanya sudah dilakukan dengan maksimal, baik persiapan maupun saat pelaksanaannya. Kamu tinggal menyerahkan hasilnya kepada yang maha kuasa, yaitu dengan berdo’a setelah menyelesaikan soal UNBK. Tentu do’a kamu agar bisa mendapatkan hasil UNBK yang terbaik, agar kamu bisa lulus dalam menghadapi tes UNBK. Dan bisa melanjutkan pendidikan ke jenjang yang lebih tinggi.'}
];
export default class TipsScreen extends Component {
  render () {
    return (
      <Container style={{paddingTop:30, flex:1}}>
        <Header style={{backgroundColor:'#2F954E'}}>
          <View style={{width:40, justifyContent:'center', alignContent:'center'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white"/>
            </TouchableOpacity>
          </View>
          <Body style={{flexDirection:'row'}}>
            <Text style={{color:'white'}}>Tips & Trick</Text>
          </Body>
        </Header>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
      </Container>
    );
  }
}
