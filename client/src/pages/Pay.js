import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Menu, MenuItem } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

const Pay = ()=>{
    const id = localStorage.getItem("userId");

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedTimeSpan, setSelectedTimeSpan] = useState(null);

    const timeSpans = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const response = await axios.get(`/api/v1/user/${id}?timestamp=${Date.now()}`);
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }finally {setLoading(false);}
        };

        // Call the function to fetch user data
        fetchUserData();
    }, [id]); 

    const navigate = useNavigate();


      //form handle
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/user/pay", {
                slot: selectedTimeSpan,
                id: id,
            });
            
            if(data.success){
                toast.success(data.message);
                navigate("/");
            }
        } catch (error) {
        toast.error("Error occured");
        console.log(error);
        }
    };
    if (loading) {
        return <h3>Loading...</h3>;
    }
    const isPay = userData.payment === "";

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleTimeSpanSelect = (timeSpan) => {
        setSelectedTimeSpan(timeSpan);
        setAnchorEl(null);
    };
    
    return(
        
        <>  
            {!isPay &&
            <Typography variant="h6" sx = {{fontFamily: 'Roboto, san-serif', margin:'30px 200px 30px 200px' }}>
            Hey {userData.username}! You are all set for this month and your preffered slot is {userData.slot}. We had an amazing experience with you, Hope you will continue in future!
            </Typography>
            }
            {isPay &&
            <Typography variant="h6" sx = {{fontFamily: 'Roboto, san-serif', margin:'30px 200px 30px 200px' }}>
            Hey {userData.username}! You are due for this month. If you want to continue your yoga practice, please renew you subscription according to your preffered slot.
            </Typography>
            }
            {isPay && 
            <form onSubmit={handleSubmit}>
                <Box
                    maxWidth={450}
                    display="flex"
                    flexDirection={"column"}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    borderRadius={5}
                >
                    <TextField
                        label="select slot"
                        onClick={handleClick}
                        value={selectedTimeSpan || ''}
                        margin="normal"
                        required
                    />

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {timeSpans.map((timeSpan) => (
                        <MenuItem key={timeSpan} onClick={() => handleTimeSpanSelect(timeSpan)}>
                            {timeSpan}
                        </MenuItem>
                        ))}
                    </Menu>

                    {/* {selectedTimeSpan && (
                        <p>You selected: {selectedTimeSpan}</p>
                    )} */}
                    {selectedTimeSpan && <Typography sx={{color:"#88AB8E"}}>As final step we request you to pay 500</Typography>}
                    <br></br>
                    <Button
                        type="submit"
                        sx={{ borderRadius: 3, marginTop: 3, backgroundColor: '#88AB8E'}}
                        variant="contained"
                    >
                        Payment
                    </Button>
                </Box>
            </form>}
        </>
    )
}

export default Pay;

