import { Box, IconButton, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){



    return (
        <AppBar>
            <Container>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <Toolbar>
                        HEllo.
                    </Toolbar>


                </Box>
            </Container>

        </AppBar>
        
    )
}