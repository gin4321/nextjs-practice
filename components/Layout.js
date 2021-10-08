import Head from "next/head";
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";
import useStyles from "../utils/styles";

export default function Layout({children}) {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>NextJS Practice</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>practice</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                From Gin with ❤️
            </footer>
        </div>
    )
}
