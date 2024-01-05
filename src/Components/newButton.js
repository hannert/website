import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export default function newButton(){
    const Button = styled.button`
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;

        /* Color the border and text with theme.main */
        color: ${props => props.theme.main};
        border: 2px solid ${props => props.theme.main};

    `;

    const theme = {
        main: 'mediumseagreen'
    };

    return(
        <div>
            <ThemeProvider theme={theme}>
                <Button> Hello </Button>
            </ThemeProvider>
        </div>
    )
}
