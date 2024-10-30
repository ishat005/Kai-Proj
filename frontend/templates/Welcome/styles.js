const styles = {
  mainGridProps: {
    container: true,
    item: true,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 2,
    px: { laptop: 4, desktop: 5, desktopMedium: 6 },
    py: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
    marginTop: "80px",
  },

  headingProps: {
    fontFamily: "Satoshi Bold",
    fontSize: "40px",
    lineHeight: "54px",
    color: "white",
    marginTop: "100px",
  },

  spanColor: {
    color: "#8653FF",
  },

  subHeadingProps: {
    fontFamily: "Satoshi Regular",
    fontSize: "19px",
    color: "white",
    fontWeight: "400",
    textAlign: "center",
    lineHeight: "32.4px",
    marginTop: "-10px",
  },

  buttonProps: {
    type: "submit",
    backgroundColor: "#8653FF",
    color: "white",
    fontFamily: "Satoshi Bold",
    fontSize: "16px",
    borderRadius: "26.89px",
    marginTop: "25px",
    padding: "17px",
    gap: "10px",
    border: "none",
    cursor: "pointer",
    width: "331px",
    textAlign: "center",
  },
};

export default styles;
