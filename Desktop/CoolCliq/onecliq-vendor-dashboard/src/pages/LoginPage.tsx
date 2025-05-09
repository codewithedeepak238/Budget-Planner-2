import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Paper, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Alert, 
  CircularProgress 
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { login, selectCurrentUser, selectAuthStatus, selectAuthError } from '../features/auth/authSlice';
// import type { AppDispatch, RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();

//   const user = useSelector(selectCurrentUser);
//   const status = useSelector(selectAuthStatus);
//   const error = useSelector(selectAuthError);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // once logged in, redirect
//   useEffect(() => {
//     if (user) {
//       navigate('/shops', { replace: true });
//     }
//   }, [user, navigate]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(login({ id, password }));
//   };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Vendor Login
        </Typography>

        {/* {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>} */}

        <Box component="form" onSubmit={()=>{}} noValidate>
          <TextField
            label="Vendor ID"
            value={id}
            onChange={e => setId(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />

          <Box sx={{ position: 'relative', mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Logging in…' : 'Log In'}
            </Button>
            {status === 'loading' && (
              <CircularProgress
                size={24}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
