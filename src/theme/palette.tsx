import '@material-ui/core/styles';

declare module "@material-ui/core/styles/createPalette" {
   interface PaletteColor {
    primary?: string;
    main: string;
    secondary?: string;
    para?: string;
    label?: string;
    focus?: string;
    disable?: string;
    red?: string;
    // dark?: string;
    white?: string;
  }
}
export default   {
    primary: {
      primary: "#21a390",
      main: "#FFFFFF",
      secondary: "#f3f5f9",
      para: "#c0cada",
      label: "#b4c0d3",
      focus: "#280FA5",
      disable: "#6367E7",
      red: "red",
      dark: "#000",
      white: "#FFFFFF",

    }
 
   
  }
//  }
