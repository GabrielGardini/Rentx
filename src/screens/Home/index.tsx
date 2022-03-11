import React from 'react';
import {StatusBar} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize'
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';
import Logo from '../../assets/logo.svg';
import {Car} from '../../components/Car';


export function Home(){
    const carData={
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'ao dia',
            price: 120,
        },
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhtdEn7lfsp84FhGMx0hRbslCDeovmTNuE-sR_7VggVwy12MzT68M_w32EetJvEO9Lho&usqp=CAU'

    }

    return(
    <Container>
        <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent/>
        <Header>
            <HeaderContent>
                <Logo width={RFValue(108)} height={RFValue(12)}/>
                <TotalCars>
                    Total de 12 carros
                </TotalCars>
            </HeaderContent>
        </Header>
        <CarList
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item=> String(item)}
        renderItem={({item})=> <Car data={carData}/>}
            />
    </Container>
    );
}
