import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#e3c7f1",
    height: 200,
    borderRadius: 10,
    position: "relative",
    marginTop: "15vh",
  },
  result: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    paddingBottom: 10,
  },
  btn: {
    marginTop: 5,
  },
}));

export { useStyles };
