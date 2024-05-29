import  React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider} from '@mui/material';
import "./styles.css";
import Grid from "../Grid";
import List from "../List";
// import { convertNumber } from "../../../functions/convertNumber";

export default function TabsComponent({coins}) {

  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const theme = createTheme({
    palette: {
      primary:{
        main : "#ff5500",
      },
    },
  });

  const style = {
    color: "var(--white)",
    width: "50vw",
    fintSize: "1.2rem",
    fontWeigth: 600,
    fintFamily: "Inter",
    textTransform: "capitalize"
  };

  return (
    <ThemeProvider theme={theme}> 
      <TabContext value={value}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
      <TabPanel value="grid">
        <div className="grid-flex">
          {coins.map((coin, i) => (
            <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
          ))}
        </div>
      </TabPanel>
      <TabPanel value="list">
        <table className="list-flex">
          {coins.map((coin, i) => (
            <List coin={coin} key={i} delay={(i % 8) * 0.2} />
          ))}
        </table>
      </TabPanel>
    </TabContext>
    </ThemeProvider>
  );
}
