import { useState , useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import Web3 from 'web3';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Money = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const[ethaddress , setEthaddress] = useState();
  const[name , setName] = useState();
  const[lname , setLname] = useState();
  const[afforg , setAfforg] = useState();

  const handleEthAddress = (e) => {
    setEthaddress(e.target.value);
    console.log(e.target.value)
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value)
  };

  const handleLname = (e) => {
    setLname(e.target.value);
    console.log(e.target.value)
  };
  const handleAorg = (e) => {
    setAfforg(e.target.value);
    console.log(e.target.value)
  };
  



  const Add = async () => {

     
      
    // if (window.ethereum) {
      const web3 = window.web3;
      const webeProvider = new Web3(Web3.givenProvider);
      var accounts = await window.web3.eth.getAccounts();
      const account = accounts[0];

      var abi = [{"inputs":[{"internalType":"address","name":"addres","type":"address"},{"internalType":"string","name":"firstName","type":"string"},{"internalType":"string","name":"lastName","type":"string"},{"internalType":"string","name":"DOB","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"national_Identity_Number","type":"string"},{"internalType":"string","name":"phoneNumber","type":"string"},{"internalType":"string","name":"affilated_Bank","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"front_img","type":"string"},{"internalType":"string","name":"back_img","type":"string"}],"name":"addCustomer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"Addres","type":"address"}],"name":"addKyc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addres","type":"address"},{"internalType":"string","name":"fname","type":"string"},{"internalType":"string","name":"lastname","type":"string"},{"internalType":"string","name":"affilated_Organization","type":"string"}],"name":"addOfficer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addres","type":"address"},{"internalType":"string","name":"name","type":"string"}],"name":"addOrganization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"senderAddres","type":"address"},{"internalType":"string","name":"senderName","type":"string"},{"internalType":"address","name":"receiverAddres","type":"address"},{"internalType":"string","name":"receiverName","type":"string"},{"internalType":"uint256","name":"Amount","type":"uint256"}],"name":"addTransaction","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"senderAddres","type":"address"},{"internalType":"string","name":"senderName","type":"string"},{"internalType":"address","name":"receiverAddres","type":"address"},{"internalType":"string","name":"receiverName","type":"string"},{"internalType":"uint256","name":"Amount","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"addTransactionSus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allCustomer","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"dob","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"national_Identity_Number","type":"string"},{"internalType":"string","name":"phone_Number","type":"string"},{"internalType":"string","name":"affilated_Bank","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"front_ID","type":"string"},{"internalType":"string","name":"back_ID","type":"string"},{"internalType":"bool","name":"kyc","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allKyc","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"bool","name":"request","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allOfficer","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"affilated_Organization","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allOrganizations","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allTransaction","outputs":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allTransaction_susp","outputs":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"Addres","type":"address"}],"name":"approveKyc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cus_role","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"customer_Detail","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"dob","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"national_Identity_Number","type":"string"},{"internalType":"string","name":"phone_Number","type":"string"},{"internalType":"string","name":"affilated_Bank","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"front_ID","type":"string"},{"internalType":"string","name":"back_ID","type":"string"},{"internalType":"bool","name":"kyc","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"customer_Transaction","outputs":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllCustomer","outputs":[{"components":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"dob","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"national_Identity_Number","type":"string"},{"internalType":"string","name":"phone_Number","type":"string"},{"internalType":"string","name":"affilated_Bank","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"front_ID","type":"string"},{"internalType":"string","name":"back_ID","type":"string"},{"internalType":"bool","name":"kyc","type":"bool"}],"internalType":"struct FYP.customer[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllKyc","outputs":[{"components":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"bool","name":"request","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"}],"internalType":"struct FYP.kyc[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllOfficer","outputs":[{"components":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"affilated_Organization","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"internalType":"struct FYP.officer[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllOrganization","outputs":[{"components":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"internalType":"struct FYP.organization[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllTransaction","outputs":[{"components":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct FYP.customerTransaction[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllTransactionSus","outputs":[{"components":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct FYP.customerTransaction[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"kyc_req","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"bool","name":"request","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"officer_Detail","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"affilated_Organization","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"org_Detail","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"org_role","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addres","type":"address"}],"name":"removeCustomer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addres","type":"address"}],"name":"removeOrganization","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var contractaddress = "0x9c77c4780012515731E042a4E10ec780c97776aF";

      const instance = new web3.eth.Contract(abi, contractaddress);
      
     await instance.methods.addOfficer(ethaddress , name , lname ,afforg).send({
          from : account
        });

    
    }

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Add Money Laundering Reporting Officer" subtitle="Add laundering reporting officer" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Wallet Address"
                onBlur={handleBlur}
                onChange={handleEthAddress}
                value={ethaddress}
                name="firstName"
                // error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleName}
                value={name}
                name="firstName"
                // error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleLname}
                value={lname}
                name="firstName"
                // error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                variant="filled"
                type="text"
                label="Affiliated Organization"
                onBlur={handleBlur}
                onChange={handleAorg}
                value={afforg}
                name="firstName"
                // error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
             
            
            </Box>
            <Box  justifyContent="end" mt="20px">
              <Button onClick={Add} type="submit" color="secondary" variant="contained">
                Add Officer
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Money;
