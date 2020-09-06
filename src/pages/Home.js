import React from 'react';
import { Typography, Card, CardMedia, CardContent, Divider, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import Bio from '../components/Bio';
import showcasePersonDesktop from '../assets/showcase-full.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: '1200px',
    minHeight: '75vh',
    margin: '3rem auto',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  showcaseContent: {
    padding: '0 3rem',
    boxShadow: 'none',
    background: theme.palette.light.main,
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '70%',
      margin: '1rem auto'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem 0',
      width: '85%'
    },
    '@media (max-width: 400px)': {
      padding: 0,
      width: '100%',
      margin: '1rem auto'
    }
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '7px',
    textAlign: 'center',
    '@media (max-width: 300px)': {
      fontSize: '0.95rem'
    }
  },
  titleDivider: {
    marginBottom: '10px'
  },
  subTitle: {
    textAlign: 'justify'
  },
  showcaseImgWrapper: {
    boxShadow: 'none',
    background: theme.palette.light.main,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 0,
    maxHeight: '570px',
    maxWidth: '900px',
    padding: '1rem',
    margin: '0 auto'
  },
  showcaseImg: {
    width: '100%',
    height: '100%'
  },
  actionsWrapper: {},
  actionBtn: {
    transition: '0.3s all ease-in-out',
    '&:hover': {
      background: theme.palette.primary.dark,
      color: theme.palette.light.main,
      transition: '0.3s all ease-in-out'
    }
  }
}));

const additionalActions = [
  { label: 'Our Services', path: '/services', variant: 'contained', color: 'primary' },
  { label: 'About Us', path: '/about', variant: 'outlined', color: 'default' }
];

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Fade left>
          <Card elevation={0} className={classes.showcaseImgWrapper}>
            <CardMedia
              image={showcasePersonDesktop}
              component="img"
              alt="showcase-image"
              className={classes.showcaseImg}
            />
          </Card>
        </Fade>
        <Card elevation={0} className={classes.showcaseContent}>
          <Fade bottom cascade>
            <CardContent>
              <Typography component="h3" color="primary" className={classes.title}>
                <Zoom right cascade className={classes.title}>
                  Welcome To KUS
                </Zoom>
              </Typography>
              <Divider className={classes.titleDivider} variant="middle" />
              <Typography variant="subtitle1" className={`${classes.subTitle} bg-shape-1`}>
                We as a company working with countries over the globe and counting, you can be rest assured that your
                achievements and goals scale boundaries and roles. Employee growth is exponential for people who choose
                to go the extra mile.
              </Typography>
            </CardContent>
            <CardActions className={classes.actionsWrapper}>
              {additionalActions.map(({ label, path, variant, color }) => (
                <Fade right cascade key={label}>
                  <Button to={path} component={NavLink} variant={variant} color={color} className={classes.actionBtn}>
                    {label}
                  </Button>
                </Fade>
              ))}
            </CardActions>
          </Fade>
        </Card>
      </div>
      <Bio />
    </>
  );
};

export default Home;
