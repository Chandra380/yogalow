import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
const Header = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  const [value, setValue] = useState();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#88AB8E" }}>
        <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' }}><Typography variant="h3" sx={{ fontFamily: 'Lobster, sans-serif', color: '#001524' }}>YogaFlow</Typography></Link>
          
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 3, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 3, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}

            {isLogin && (
              <Button  sx={{ margin: 2, color: "white" }}
              LinkComponent={Link}
              to="/pay"
              >
                Subscribe
              </Button>
            )}

            {isLogin && (
              <Button onClick={handleLogout} sx={{ margin: 2, color: "white" }}>
                Logout
              </Button>
            )}
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
