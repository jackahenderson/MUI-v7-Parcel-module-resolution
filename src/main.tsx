import { Button, createTheme, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ff00ff"
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained"
			}
		}
	}
});
window.addEventListener("load", async () => {
	const root = createRoot(document.getElementById("root")!);

	root.render(
		<ThemeProvider theme={theme}>
			<Button>Test</Button>
		</ThemeProvider>
	);
});
