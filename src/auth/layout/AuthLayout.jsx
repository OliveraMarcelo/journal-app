/* su contenido sera lo que necesito reutilizar */

import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4}}
            >
                <Grid
                    item
                    className="box-shadow"
                    xs={3}
                    sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 , width: {md :450}}}
                >
                    <Typography variant="h5" sx={{ mb: 1 }}>
                        {title}
                    </Typography>
                    {/* los hijos del auth layout van aca osea el children 
                por que los children difieren en nuestor caso los inputs botones etc pero lo de alrededor no xd
                */}
                    {children}
                </Grid>
            </Grid>
        </>
    );
};
