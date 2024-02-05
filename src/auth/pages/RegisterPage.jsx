import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
<form>
                <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contrasena"
                            type="password"
                            fullWidth
                        >
                        </TextField>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                        <Grid item xs={12} >
                            <Button variant='contained' fullWidth >
                                Crear cuenta
                            </Button>
                        </Grid>
                        <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
                        <Typography>
                          Ya tienes cuenta? 
                        </Typography>
                            <Link component={RouterLink} color="inherit" to="/auth/login" >
                            Ingresa
                            </Link> 
                        </Grid>
                    </Grid>
                </Grid>
            </form>
    </AuthLayout>
  )
}
