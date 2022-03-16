import React, {useState} from 'react';
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from './styles';
import {BackButton} from "../../components/BackButton";
import {useTheme} from "styled-components";
import {StatusBar, View} from "react-native";

import ArrowSvg from '../../assets/arrow.svg';
import {Button} from "../../components/Button";
import {Calendar, DayProps, generateInterval} from "../../components/Calendar";
import {useNavigation} from "@react-navigation/native";






export function Scheduling(){
    const [lastSelectedDate,setLastSelectedDate] = useState<DayProps>({}as DayProps);
    const navigation = useNavigation();
    function handleConfirmRental(){
        navigation.navigate('SchedulingDetails');
    }
    function handleBack(){
        navigation.goBack();
    }
    function handleChangeDate(date:DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;
        if(start.timestamp>end.timestamp){
            start=end;
            end=start;
        }
        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
    }
    const theme = useTheme();
    return(
    <Container>
        <Header>
            <StatusBar
                barStyle={'light-content'}
                // translucent
                backgroundColor={'#1b1b1f'}
            />
            <View style={{alignSelf: 'flex-start'}}>
                <BackButton onPress={handleBack} color={theme.colors.shape}/>
            </View>
            <Title>
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
            </Title>
            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue selected={false}>18/06/2021</DateValue>
                </DateInfo>

                <ArrowSvg/>

                <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue selected={true}>20/06/2021</DateValue>
                </DateInfo>
            </RentalPeriod>
        </Header>
        <Content>
            <Calendar
            markedDates={}
            onDayPress={handleChangeDate}/>
        </Content>
        <Footer>
            <Button onPress={handleConfirmRental} title={"Confirmar"}/>
        </Footer>
    </Container>
    );
}
