

import { useState , useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTransaction } from "../../data/mockData";
import Header from "../../components/Header";
import Web3 from 'web3';
import { useTheme } from "@mui/material";
import "./index.css";
const Suspectorg = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const[investlen , setinvestlen] = useState([]);
  useEffect(()=>{

    Info();
   
 
   }, [])
 
   const Info = async () => {
     window.web3 = new Web3(window.ethereum);
     await window.ethereum.enable();
     const accounts = await window.web3 .eth.getAccounts();
       const account = accounts[0];
 
 
     var abi = [{"inputs":[{"internalType":"address","name":"addres","type":"address"},{"internalType":"string","name":"firstName","type":"string"},{"internalType":"string","name":"lastName","type":"string"},{"internalType":"string","name":"DOB","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"national_Identity_Number","type":"string"},{"internalType":"string","name":"phoneNumber","type":"string"},{"internalType":"string","name":"affilated_Bank","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"front_img","type":"string"},{"internalType":"string","name":"back_img","type":"string"}],"name":"addCustomer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"Addres","type":"address"}],"name":"addKyc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addres","type":"address"},{"internalType":"string","name":"fname","type":"string"},{"internalType":"string","name":"lastname","type":"string"},{"internalType":"string","name":"affilated_Organization","type":"string"}],"name":"addOfficer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addres","type":"address"},{"internalType":"string","name":"name","type":"string"}],"name":"addOrganization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"senderAddres","type":"address"},{"internalType":"string","name":"senderName","type":"string"},{"internalType":"address","name":"receiverAddres","type":"address"},{"internalType":"string","name":"receiverName","type":"string"},{"internalType":"uint256","name":"Amount","type":"uint256"}],"name":"addTransaction","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"senderAddres","type":"address"},{"internalType":"string","name":"senderName","type":"string"},{"internalType":"address","name":"receiverAddres","type":"address"},{"internalType":"string","name":"receiverName","type":"string"},{"internalType":"uint256","name":"Amount","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"addTransactionSus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allCustomer","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"dob","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"national_Identity_Number","type":"string"},{"internalType":"string","name":"phone_Number","type":"string"},{"internalType":"string","name":"affilated_Bank","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"front_ID","type":"string"},{"internalType":"string","name":"back_ID","type":"string"},{"internalType":"bool","name":"kyc","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allKyc","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"bool","name":"request","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allOfficer","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"affilated_Organization","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allOrganizations","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allTransaction","outputs":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allTransaction_susp","outputs":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"Addres","type":"address"}],"name":"approveKyc","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cus_role","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"customer_Detail","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"dob","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"national_Identity_Number","type":"string"},{"internalType":"string","name":"phone_Number","type":"string"},{"internalType":"string","name":"affilated_Bank","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"front_ID","type":"string"},{"internalType":"string","name":"back_ID","type":"string"},{"internalType":"bool","name":"kyc","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"customer_Transaction","outputs":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllCustomer","outputs":[{"components":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"dob","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"national_Identity_Number","type":"string"},{"internalType":"string","name":"phone_Number","type":"string"},{"internalType":"string","name":"affilated_Bank","type":"string"},{"internalType":"string","name":"image","type":"string"},{"internalType":"string","name":"front_ID","type":"string"},{"internalType":"string","name":"back_ID","type":"string"},{"internalType":"bool","name":"kyc","type":"bool"}],"internalType":"struct FYP.customer[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllKyc","outputs":[{"components":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"bool","name":"request","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"}],"internalType":"struct FYP.kyc[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllOfficer","outputs":[{"components":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"affilated_Organization","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"internalType":"struct FYP.officer[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllOrganization","outputs":[{"components":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"internalType":"struct FYP.organization[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllTransaction","outputs":[{"components":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct FYP.customerTransaction[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllTransactionSus","outputs":[{"components":[{"internalType":"uint256","name":"transaction_id","type":"uint256"},{"internalType":"address","name":"sender_Adress","type":"address"},{"internalType":"string","name":"sender_Name","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"receiver_Adress","type":"address"},{"internalType":"string","name":"receiver_Name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct FYP.customerTransaction[]","name":"ids","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"kyc_req","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"bool","name":"request","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"officer_Detail","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"address","name":"org","type":"address"},{"internalType":"string","name":"first_Name","type":"string"},{"internalType":"string","name":"last_Name","type":"string"},{"internalType":"string","name":"affilated_Organization","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"org_Detail","outputs":[{"internalType":"address","name":"eth_Adress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"org_role","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addres","type":"address"}],"name":"removeCustomer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addres","type":"address"}],"name":"removeOrganization","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    var contractaddress = "0x9c77c4780012515731E042a4E10ec780c97776aF";
 
     const instance = new web3.eth.Contract(abi, contractaddress);
 
      var  investd =  await instance.methods.getAllOfficer().call();
       console.log(investd);
   //     setinvestId(investd[0]);
      
     
 
       if(investd.length ){
         let reward = 0 ;
         setinvestlen([]);
         var inv =  [];
 
    for(var i = 0 ; i < investd.length  ; i++){
         
         console.log(investlen.length);
        
 
          
            
           inv.push({ address : investd[i].eth_Adress , name : investd[i].first_Name , bank : investd[i].affilated_Organization}) ;
           
           setinvestlen(inv)
          
           // }
      
 
       
         console.log("1 bar hoa aasign")
       }
       
     }
 
 
 
      setTimeout(()=> console.log(investlen.length), 5000);
 
       
   };
 

  return (

    <table>
    <thead>
    <tr>
    <th>No</th>
    <th>ETH Address</th>
  <th>Officer Name</th>
  <th>Affilated Org</th>
    </tr>
   </thead>
   <tbody>
   {investlen.length > 0 &&
 investlen.map((st, index) => (
 
<tr key={index}>
  <td>{index}</td>
  <td>{st.address}</td>
  <td>{st.name}</td>
  <td>{st.bank}</td>
 
</tr>

))}
</tbody>
</table>

  );
};

export default Suspectorg;
