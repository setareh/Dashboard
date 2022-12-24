import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../component/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";


export default function FAQ() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
        <Header title='FAQ' subtitle='Frequently Asked Question Page' />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Quetsion Title...?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta illo doloribus aperiam ducimus. Iusto sapiente magnam, quae consequuntur enim harum eos, magni labore eius reiciendis explicabo, sequi sed ea!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    what is ..?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta illo doloribus aperiam ducimus. Iusto sapiente magnam, quae consequuntur enim harum eos, magni labore eius reiciendis explicabo, sequi sed ea!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    How ... ?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta illo doloribus aperiam ducimus. Iusto sapiente magnam, quae consequuntur enim harum eos, magni labore eius reiciendis explicabo, sequi sed ea!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    When ...?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta illo doloribus aperiam ducimus. Iusto sapiente magnam, quae consequuntur enim harum eos, magni labore eius reiciendis explicabo, sequi sed ea!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}
