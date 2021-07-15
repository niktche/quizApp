import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
    marginLeft: 28,
  },
  selectEmpty: {
    marginTop: theme.spacing(5),
  },
  start: {
    marginTop: 20,
    cursor: "pointer",
  },
  btn: {
    textDecoration: "none",
    width: "100%",
    marginTop: 40,
    paddingTop: 10,
  },
  container: {
    backgroundColor: "#e3c7f1",
    padding: 20,
    paddingTop: 30,
    paddingBottom: 50,
    borderRadius: 10,
    marginTop: "15vh",
  },
}));

export { useStyles };
