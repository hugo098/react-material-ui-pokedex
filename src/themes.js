import { createMuiTheme } from '@material-ui/core/styles';

const themes = {
    darkTheme : createMuiTheme({
        palette: {
            type: 'dark',
        },
        overrides: {
            MuiFormLabel: {
                root: {
                    "&$focused": {
                        "color": '#CFCFCF'
                    },
                },
            },
            MuiInput: {
                underline: {
                    "borderBottom": '1px solid #CFCFCF',
                    "&:after": {
                        "borderBottom": '2px solid #CFCFCF',
                    },
                    '&:hover:not($disabled):before': {
                        borderBottom: `2px solid #CFCFCF`,
                        '@media (hover: none)': {
                            borderBottom: `1px solid #CFCFCF`,
                        },
                    },
                },
            },
        },
    }),
    lightTheme : createMuiTheme({
        palette: {
            type: 'light',
            background: {
                paper: '#fafafa'
            },
        },
        overrides: {
            MuiFormLabel: {
                root: {
                    "color": '#CFCFCF',
                    "&$focused": {
                        "color": '#CFCFCF'
                    },
                },
            },
            MuiInput: {
                underline: {
                    "borderBottom": '1px solid #CFCFCF',
                    "&:after": {
                        "borderBottom": '2px solid #CFCFCF',
                    },
                    "&:before": {
                        "borderBottom": '1px solid #CFCFCF',
                    },
                    '&:hover:not($disabled):before': {
                        borderBottom: `2px solid #CFCFCF`,
                        '@media (hover: none)': {
                            borderBottom: `1px solid #CFCFCF`,
                        },
                    },
                },
            },
        },
    })
}

export default themes;

