import React from 'react';
import { Container, Header, CarImages, Content, Details, Description, Brand, Name,Rent, Period, Price, About, Acessories, Footer } from './styles';
import {BackButton} from "../../components/BackButton";
import {StatusBar} from "react-native";
import {ImageSlider} from "../../components/ImageSlider";
import { Acessory} from "../../components/Acessory";
import { Button} from "../../components/Button";
import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

export function CarDetails(){
    return(
    <Container>
        <StatusBar translucent={false}/>
        <Header>
            <BackButton onPress={()=>{}}/>
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
            <About>
                Carro vermelho mto dahora faz vrum vrum bebe igual opala mto bom mesmo comprem ai não vão se arrepender
            </About>
        </Content>
        <Footer>
            <Button title={"Confirmar"} />
        </Footer>
    </Container>
    );
}
