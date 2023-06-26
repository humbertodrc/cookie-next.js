import { Layout } from "@/components/layouts";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from "react";

const ThemeChangePage = () => {

  const [currentTheme, setCurrentTheme] = React.useState('dark')

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value)
  }

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
              <FormControlLabel value='dark' control={<Radio />} label='dark' />
              <FormControlLabel value='custom' control={<Radio />} label='custom' />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
		</Layout>
	);
};

export default ThemeChangePage;
