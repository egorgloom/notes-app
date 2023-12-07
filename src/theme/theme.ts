import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
    components: {

        MuiTextField: {
            styleOverrides: {
                root: {
                    color: 'rgb(228,226,228)',
                    fontSize: '16px',
                    fontWeight: '400',
                    outline: 'none',
                    background: 'rgb(79,77,200)',
                    border: 'none',
                    marginTop: '0.5rem',
                    marginBottom: '2rem',
                    width: '100%',
                    "& .MuiFormLabel-root": {
                        color: "rgb(228,226,228)",
                        font: "24px",
                        fontWeight: "600",


                    },
                    "& .Mui-focused": {
                        color: 'rgb(228,226,228)'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'rgb(228,226,228)',
                    fontWeight: '600',
                    backgroundColor: 'rgb(33,209,255)',
                    "&:hover": {
                        backgroundColor: 'rgb(33,234,269)',
                    }
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: 'rgb(228,226,228)',
                    fontWeight: '600',
                    '&.Mui-checked': {
                        color: 'rgb(33,209,255)',
                    },
                }
            }
        }
    }

});