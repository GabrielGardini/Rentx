import React from 'react';
import { Container, Header, CarImages, Content, Details, Description, Brand, Name,Rent, Period, Price, RentalPeriod, Acessories, Footer,CalendarIcon, DateInfo, DateTitle, DateValue,RentalPrice,RentalPriceLabel,RentalPriceDetails,RentalPriceQuota, RentalPriceTotal  } from './styles';
import {BackButton} from "../../components/BackButton";
import {StatusBar} from "react-native";
import {ImageSlider} from "../../components/ImageSlider";
import { Acessory} from "../../components/Accessory";
import { Button} from "../../components/Button";
import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";
import {Feather} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";
import {useTheme} from "styled-components";
import {useNavigation} from "@react-navigation/native";

export function SchedulingDetails(){
    const theme= useTheme()
    const navigation = useNavigation()
    function handleConfirmRent(){
        navigation.navigate('SchedulingComplete')
    };

    function handleBack(){
        navigation.goBack();
    }
    return(
    <Container>
        <StatusBar
            barStyle={'dark-content'}
            translucent
            backgroundColor={'transparent'}

            />
        <Header>
            <BackButton onPress={handleBack}/>
        </Header>
        <CarImages>
            <ImageSlider imagesUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhtdEn7lfsp84FhGMx0hRbslCDeovmTNuE-sR_7VggVwy12MzT68M_w32EetJvEO9Lho&usqp=CAU'
            ]}></ImageSlider>
        </CarImages>
        <Content>
            <Details>
                <Description>
                    <Brand>Lamborghini</Brand>
                    <Name>Huracan</Name>
                </Description>
                <Rent>
                    <Period>Ao dia</Period>
                    <Price>R$ 580</Price>
                </Rent>
            </Details>
            <Acessories>
                <Acessory name={'380 Km/h'} icon={speedSvg}/>
                <Acessory name={'3.2s'} icon={accelerationSvg}/>
                <Acessory name={'800 HP'} icon={forceSvg}/>
                <Acessory name={'Gasolina'} icon={gasolineSvg}/>
                <Acessory name={'Auto'} icon={exchangeSvg}/>
                <Acessory name={'2 pessoas'} icon={peopleSvg}/>
            </Acessories>
            <RentalPeriod>
                <CalendarIcon>
                    <Feather
                    name={'calendar'}
                    size={RFValue(24)}
                    color={theme.colors.shape}

                    />
                </CalendarIcon>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue>14/03/2022</DateValue>
                </DateInfo>
                <Feather
                    name={'chevron-right'}
                    size={RFValue(10)}
                    color={theme.colors.text}
                />
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue>14/03/2022</DateValue>
                </DateInfo>
            </RentalPeriod>
            <RentalPrice>
                <RentalPriceLabel>TOTAL</RentalPriceLabel>
                <RentalPriceDetails>
                    <RentalPriceQuota>R$580 x3 diárias</RentalPriceQuota>
                    <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                </RentalPriceDetails>
            </RentalPrice>
        </Content>
        <Footer>
            <Button  onPress={handleConfirmRent} title={"Alugar agora"} color={theme.colors.success} />
        </Footer>
    </Container>
    );
}
