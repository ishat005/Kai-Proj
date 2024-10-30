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
    marginTop: "135px",
  },

  headingProps: {
    fontFamily: "Satoshi Bold",
    fontSize: "22px",
    color: "white",
    textAlign: "center",
    marginTop: "45px",
    marginLeft: "122px",
  },

  subHeadingProps: {
    fontFamily: "Satoshi Regular",
    fontSize: "25px",
    color: "white",
    fontWeight: "400",
    textAlign: "center",
    lineHeight: "27px",
    marginTop: "15px",
    marginLeft: "122px",
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
    fontSize: "18px",
    borderRadius: "26.89px",
    marginTop: "25px",
    padding: "17px",
    gap: "10px",
    border: "none",
    cursor: "pointer",
    width: "655px",
    textAlign: "center",
    marginLeft: "100px",
  },

  spanColorParagraph: {
    color: "#444154",
  },
};

export default styles;
