import React from 'react';
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from './styles';
import {BackButton} from "../../components/BackButton";
import {useTheme} from "styled-components";
import {StatusBar, View} from "react-native";

import ArrowSvg from '../../assets/arrow.svg';
import {Button} from "../../components/Button";
import {Calendar} from "../../components/Calendar";
export function Scheduling(){
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
                <BackButton onPress={()=>{}} color={theme.colors.shape}/>
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
            <Calendar/>
        </Content>
        <Footer>
            <Button title={"Confirmar"}/>
        </Footer>
    </Container>
    );
}
