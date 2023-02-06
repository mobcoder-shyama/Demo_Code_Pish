import * as React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../constant/Colors';
import MainHeader from '../components/MainHeader';

const CampaignRanking=()=> {
    return (
      <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#000000' }}>
         <MainHeader/>
        <Text style={{color:Colors.textColor.white}}>CampaignRanking!</Text>
      </View>
    );
  }

  export default CampaignRanking