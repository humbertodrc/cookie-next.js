import { Layout } from "@/components/layouts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { FC, useEffect } from "react";
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import axios from 'axios';

const ThemeChangePage: FC = (props) => {
  
  const [currentTheme, setCurrentTheme] = React.useState('dark')

  /**
   * Funcion que se ejecuta cuando se cambia el tema
   * @param event 
   */
  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value)

    localStorage.setItem('theme', event.target.value)
    Cookies.set('theme', event.target.value)
  }

  const handleClick = async() => {
    const { data } = await axios.get('/api/hello')
    
    console.log({data});
  }

  useEffect(() => {
    console.log(localStorage.getItem('theme'))
    console.log(Cookies.get('theme'))
  }, [])

	return (
		<Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>
              Tema
            </FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={handleChangeTheme}
            >
              <FormControlLabel value='light' control={<Radio />} label='light' />
              <FormControlLabel value='dark' control={<Radio />} label='dark'/>
              <FormControlLabel value='custom' control={<Radio />} label='custom' />
            </RadioGroup>
          </FormControl>
          <Button
            onClick={handleClick}
          >
            Solicitud
          </Button>
        </CardContent>
      </Card>
		</Layout>
	);
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  
  const {theme = 'dark'} = req.cookies;

  return {
    props: {
      theme
    }
  }
}

export default ThemeChangePage;
