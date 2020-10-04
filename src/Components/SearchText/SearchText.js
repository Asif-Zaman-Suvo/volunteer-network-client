import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import './SearchText.css'

const SearchText = () => {
    return (
        <Container>
        <div className='textSearch'>
            <h1 className="head text-center align-items-center ml-5 mt-5">I GROW BY HELPING PEOPLE IN NEED.</h1>
            <br></br>

            <InputGroup>
                <FormControl 
                    placeholder="Search....."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button style={{
                       
                        borderRadius:'0px 8px 0px 8px',
                        width: "118px",
                        height:" 40px"
                        
                        }} variant="primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>




        </div>

    </Container>
    );
};

export default SearchText;