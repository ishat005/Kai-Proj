const styles = {
  mainGridProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 5,
    px: { laptop: 4, desktop: 5, desktopMedium: 6 },
    py: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
  },
  titleGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  loginGridProps:{
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontWeight: 'bold',
    color: '#6960Ec',
  },

  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
  },

  subtitleProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '18px',
  },
  
  highlightTextProps: {
    component: 'span',
    // fontFamily: 'inherit',
    fontFamily: 'Satoshi Bold',
    fontSize: 'inherit',
    color: (theme) => theme.palette.primary.main,
  },

  loginSubtitleProps: {
    color: 'black',
    margin: 0
  },

  signupGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    fontWeight: 'bold',
    color: '#6b3dbf',
    backgroundColor: '#6b3dbf',
    margin: 0,
    
  },

  signupSubtitleProps: {
    color: 'black',
    margin: 0
  },
};

export default styles;
