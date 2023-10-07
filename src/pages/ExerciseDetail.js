import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import axios from 'axios'

function ExerciseDetail() {
	const [exercisedetail, setexercisedetail] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchexercisedata = () => {
		const options = {
			method: 'GET',
			url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
			headers: {
				'X-RapidAPI-Key': '16574b965fmsha8f202399dac303p1a23e4jsn5cf5727ba928',
				'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
			}
		};
		axios.request(options).then(function (response) {
			console.log(response.data);
			setexercisedetail(response.data);
		}).catch(function (error) {
			console.error(error);
		});
		};
		fetchexercisedata();
	}, [id]);

	return (
		<Box>
			<Detail exercisedetail={exercisedetail} />
		</Box>
	)
}

export default ExerciseDetail