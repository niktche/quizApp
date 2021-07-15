import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btn: {
    marginTop: 20,
    width: "100%",
  },
  question: {
    height: 70,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: "#e3c7f1",
    padding: 20,
    paddingBottom: 50,
    borderRadius: 10,
    marginTop: "15vh",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  goBack: {
    marginTop: 40,
    width: "25%",
  },
}));

export { useStyles };
