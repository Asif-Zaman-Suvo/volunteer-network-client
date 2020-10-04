import React, { useState } from 'react';

import NavBar from '../NavBar/NavBar';
import SearchText from '../SearchText/SearchText';
import './Background.css'
import ShowCard from '../ShowCard/ShowCard';
import fakeData from '../../fakeData/fakeData'
import { Row } from 'react-bootstrap';

const Background = () => {
    const cardPic=fakeData;
   
    const [showCards,setShowCards]=useState(cardPic[0]);


    return (

        <section className='backImage'>


            <div className='imageOverlay'>

            </div>


            <NavBar></NavBar>
            <SearchText></SearchText>

            <Row>
                {
                    cardPic.map(cp => <ShowCard cp={cp}></ShowCard> )

                }

            </Row>
            
           






        </section>

    );

};

export default Background;