import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...{
            padding: theme.spacing(2),
            borderWidth: "1.5px",
          },
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'aktiv-grotesk', 'Helvetica Neue', 'Helvetica', sans-serif",
      textTransform: "none",
    },
  },
});

export default theme;
