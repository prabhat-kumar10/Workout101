import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'


function NavBar() {
	return (
		<>
			<Stack
				direction="row"
				justifyContent="space-around"
				sx={{
					gap: { sm: '123px', xs: '40px' },
					mt: { sm: '32px', xs: '20px' },
					justifyContent: 'none'
				}}
				px="20px">


				<Link to="/">
					<img src={Logo} alt="logo"
						style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
				</Link>

				<Stack
					direction="row"
					gap="20px"
					fontFamily="Alegreya"
					fontSize="24px"
					alignItems="flex-end">

					<Link to="/"
						style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home
					</Link>

					<a href="/#exercises"
						style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Exercises
					</a>

					<Link to="/Bmicalculator"
						style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>BMI
					</Link>

				</Stack>
			</Stack>
			<Typography ml={"25px"} fontWeight="bold" fontSize="15px" color="red">Workout101</Typography>
		</>
	)
}

export default NavBar;
