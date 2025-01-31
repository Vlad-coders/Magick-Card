// import { useEffect, useState } from 'react';
// import SignUpPage from './components/pages/Login/SignUpPage/SignUpPage';
// import axiosInstance, { setAccessToken } from './api/axiosInstance';
// import MainPage from './components/pages/MainPage/MainPage';

// import { Route, Routes, useNavigate } from 'react-router';

// import LoginPage from './components/pages/Login/LoginPage/LoginPage';
// import PersonalAccount from './components/pages/Login/PersonalAccount/PersonalAccount';

// import Layout from './Layout';
// // import BasketPage from "./components/pages/BasketPage";
// import ProtectedRouter from './components/pages/Login/PersonalAccount/PersonalAccount';
// import BasketPage from './components/pages/Basket/BasketPage';
// import NotFoundPage from './components/NotFoundPage/NotFoundPage';
// // ./components/HOCs/ProtectedRouter

// function App() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ status: 'logging' });

//   useEffect(() => {
//     axiosInstance('/tokens/refresh')
//       .then(({ data }) => {
//         setTimeout(() => {
//           setUser({ status: 'logged', data: data.user });
//         }, 1000);
//         setAccessToken(data.accessToken);
//       })
//       .catch(() => {
//         setUser({ status: 'guest', data: null });
//         setAccessToken('');
//       });
//   }, []);

//   const logoutHandler = async () => {
//     // alert('logout');
//     await axiosInstance
//       .get('/auth/logout')
//       .then(() => setUser({ status: 'guest', data: null }));
//   };

//   const signUpHandler = (e) => {
//     e.preventDefault();
//     const formData = Object.fromEntries(new FormData(e.target));
//     if (!formData.email || !formData.password || !formData.name || !formData.city) {
//       return alert('Missing required fields');
//     }
//     axiosInstance.post('/auth/signUp', formData).then(({ data }) => {
//       setUser({ status: 'logged', data: data.user });
//       setAccessToken(data.accessToken);
//     });
//     navigate('/');
//   };

//   const loginHandler = (e) => {
//     e.preventDefault();
//     const formData = Object.fromEntries(new FormData(e.target));
//     if (!formData.email || !formData.password) {
//       return alert('Missing required fields');
//     }
//     axiosInstance.post('/auth/login', formData).then(({ data }) => {
//       setUser({ status: 'logged', data: data.user });
//       setAccessToken(data.accessToken);
//     });
//     navigate('/');
//   };

//   return (
//     <Routes>
//       <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
//         <Route path="/" element={<MainPage user={user} />} />

//         <Route path="/signUp" element={<SignUpPage signUpHandler={signUpHandler} />} />
//         <Route path="/login" element={<LoginPage loginHandler={loginHandler} />} />

//           <Route path="/account" element={<PersonalAccount user={user} />} />
//           <Route path="/basket" element={<BasketPage />} />

//         <Route
//           element={
//             <ProtectedRouter isAllowed={user.status === 'logged'} redirectTo="/signUp" />
//           }
//         ></Route>

//         <Route path="*" element={<NotFoundPage />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import axiosInstance, { setAccessToken } from './api/axiosInstance';
import SignUpPage from './components/pages/Login/SignUpPage/SignUpPage';
import LoginPage from './components/pages/Login/LoginPage/LoginPage';
import MainPage from './components/pages/MainPage/MainPage';
import PersonalAccount from './components/pages/Login/PersonalAccount/PersonalAccount';
import BasketPage from './components/pages/Basket/BasketPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ProtectedRouter from './components/HOCs/ProtectedRouter';
import Layout from './Layout';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ status: 'logging' });

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: 'logged', data: data.user });
        }, 1000);
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: 'guest', data: null });
        setAccessToken('');
      });
  }, []);

  const logoutHandler = async () => {
    await axiosInstance.get('/auth/logout');
    setUser({ status: 'guest', data: null });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name || !formData.city) {
      return alert('Missing required fields');
    }
    axiosInstance.post('/auth/signUp', formData).then(({ data }) => {
      setUser({ status: 'logged', data: data.user });
      setAccessToken(data.accessToken);
    });
    navigate('/');
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert('Missing required fields');
    }
    axiosInstance.post('/auth/login', formData).then(({ data }) => {
      setUser({ status: 'logged', data: data.user });
      setAccessToken(data.accessToken);
    });
    navigate('/');
  };

  return (
    <Routes>
      <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/signUp" element={<SignUpPage signUpHandler={signUpHandler} />} />
        <Route path="/login" element={<LoginPage loginHandler={loginHandler} />} />

        <Route
          element={
            <ProtectedRouter isAllowed={user.status === 'logged'} redirectTo="/login" />
          }
        >
          <Route path="/account" element={<PersonalAccount user={user} />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
