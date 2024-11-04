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
    height: "100vh",
    width: "100%",
  },

  headingProps: {
    fontFamily: "Satoshi Bold",
    fontSize: "22px",
    color: "white",
    textAlign: "center",
    marginTop: "100px",
    marginLeft: "100px",
  },

  subHeadingProps: {
    fontFamily: "Satoshi Regular",
    fontSize: "28px",
    color: "white",
    fontWeight: "400",
    textAlign: "center",
    lineHeight: "27px",
    marginTop: "30px",
    marginLeft: "100px",
  },

  labelProps: {
    fontFamily: "Satoshi Regular",
    fontWeight: "700",
    fontSize: "16px",
    color: "white",
    lineHeight: "18.33px",
    width: "320px",
    display: "inline-block",
    textAlign: "center",
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
    width: "720px",
    textAlign: "center",
    // marginLeft: "80px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },

  spanColorParagraph: {
    color: "#444154",
  },
};

export default styles;
