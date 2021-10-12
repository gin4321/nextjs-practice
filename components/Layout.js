import Head from "next/head";
import NextLink from "next/link";
import {AppBar, Container, Link, Toolbar, Typography} from "@material-ui/core";
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
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>practice</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}/>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
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
