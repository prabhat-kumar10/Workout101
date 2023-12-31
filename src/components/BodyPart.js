import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

function BodyPart({ item, bodyPart, setbodyPart }) {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={
                {
                    backgroundColor: '#FFCCCB',
                    borderRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                }
            }
            onClick={()=>{
                // console.log(item);
                setbodyPart(item);
                window.scrollTo({top:1800,left:100,behavior:'smooth'});
            }}
        >
            <img src={Icon} alt="dumbbell" style={{ width: '50px', height: '50px' }} />

            <Typography fontSize="30px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>

        </Stack>
    )
}

export default BodyPart;
