import { Avatar, Box, Container, CssBaseline, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import { registerAction } from '../../Redux/Actions/UserActions';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const dispatch=useDispatch()
    const { register,
            handleSubmit,
            formState: { errors,isSubmitting,isValid } } = useForm({mode:"all"});
        const handleFormSubmit = (data) => {  
         
        dispatch(registerAction(data.email,data.firstName,data.lastName,data.password,data.confirmPassword))
        };
  return (
    <div className='background-components'>
       <Container component="main" maxWidth="xs"> 
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5" color={`black`}>
           R e g i s t e r
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required={true}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email", { required: "email is required" })}
              error={!!errors?.email?.message}
              helperText={errors?.email?.message}
            />
                 <TextField
              margin="normal"
              required
              fullWidth
              name="FirstName"
              label="First Name"
              type="text"
              id="firstName"
              autoComplete="firstName"
              {...register("firstName", { required: "first name is required" })}
              error={!!errors?.firstName?.message}
              helperText={errors?.firstName?.message}

            />
                 <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="LastName"
              id="LastName"
              autoComplete="lastName"
              {...register("lastName", { required: "last name is required" })}
              error={!!errors?.lastName?.message}
              helperText={errors?.lastName?.message}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: "password is required" })}
              error={!!errors.password}
              helperText={errors?.password?.message}
            />
                <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="ConfirmPassword"
              id="confirmPassword"
              autoComplete="confirm-password"
              {...register("confirmPassword", { required: "confirm password is required" })}
              error={!!errors?.confirmPassword?.message}
              helperText={errors?.confirmPassword?.message}
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Register
            </LoadingButton>
        
          </Box>
        </Box>
        <p>
       Already have account?
    <Link to="/login"> Log In </Link>
        </p>
      </Container>
    </div>
  )
}

export default Register
