import React from "react";

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

const Login = () => {
  const classes = useStyles();

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
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
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

Login.propTypes = {};

export default Login;
