import React from "react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { reduxForm, Form, Field } from "redux-form";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";

// actions auth
import { actionsAuth } from "../../store/ducks/auth";

import BgLogin from "../../assets/img/bg-login.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

const Login = ({ handleSubmit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSave = ({ username, password }) =>
    dispatch(actionsAuth.authLoginInit(username, password));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${BgLogin})`,
        backgroundSize: "cover"
      }}
    >
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card
            style={{
              maxWidth: "500px"
            }}
          >
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}> Ecommerce </h4>
              <p className={classes.cardCategoryWhite}>
                Bem-vindo a plataforma, faça seu login para ter acesso a todos
                os recursos
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <Form
                  style={{ width: "100%" }}
                  onSubmit={handleSubmit(values => handleSave(values))}
                >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      name="username"
                      component={CustomInput}
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      name="password"
                      component={CustomInput}
                      labelText="Password"
                      id="password"
                      ty
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password"
                      }}
                    />
                  </GridItem>
                </Form>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="danger" fullWidth>
                Login
              </Button>
              <Button color="danger" fullWidth>
                Cadastro
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

Login.propTypes = {
  // func
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "auth-login"
})(Login);
