import MenuIcon from "@mui/icons-material/Menu";
import { Typography, Stack } from '@mui/material';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

export const Navbar = () => {
	return (
		<AppBar position="static" elevation={0}>
			<Toolbar>
				<IconButton size="large" edge="start">
					<MenuIcon />
				</IconButton>
				<Stack direction='row' flex='1' justifyContent='space-between'>
					<Link href="/" style={{textDecoration: 'none'}}>
						<Typography variant="h6" color="white">
							Cookie Master
						</Typography>
					</Link>
					<Link href="/theme-change" style={{textDecoration: 'none'}}>
						<Typography variant="h6" color="white">
							Cambiar tema
						</Typography>
					</Link>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};
