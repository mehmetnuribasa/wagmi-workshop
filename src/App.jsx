import { ConnectButton } from '@rainbow-me/rainbowkit';

import './App.css'
import { useState } from 'react';

import { readContract, waitForTransactionReceipt, writeContract } from 'viem/actions';
import { config } from './config';

import {abi} from "../conracts/abi.js";

function App() {

  const {mood, setMood} = useState('');

  // This function is used to get the mood value from the smart contract
  // 'then' and 'catch' are used to handle the promise returned by the readContract function
  function getMoodF() {
    // read data from the smart contract
    readContract(config, {
      abi,
      address: '0x123',
      functionName: 'get',
    })
      .then((result) => {
        setMood(result);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(result);
  }

  // async funct. and 'await' are used to wait for the promise returned by the readContract function
  // async function getMoodF() {
  //   try {
  //     const result = await readContract(config, {
  //       abi,
  //       address: '0x123',
  //       functionName: 'get',
  //     });
  //     console.log(result);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }



  // This function is used to set the mood value in the smart contract
  // 'then' and 'catch' are used to handle the promise
  function setMoodF() {
    const moodvalue = document.getElementById("data").value;

    // write data to the smart contract
    writeContract(config, {
      abi,
      address: "0x123",
      functionName: "set",
      args: {moodvalue},

    })
        .then((result) => {
          console.log(result);  // transaction hash
          waitForTransactionReceipt(config, {
            // return the transaction receipt, when the transaction is done
            hash: result,
          }).then((result) => {
              console.log(result);  // transaction receipt
          })
        })
      
        .catch((error) => {
          console.log(error);
        })
  }


  // aync funct. and 'await' are used to handle the promise
  // async function setMoodF() {
  //   try {
  //     const moodvalue = document.getElementById("data").value;

  //     // write data to the smart contract
  //     const transactionHash = await writeContract(config, {
  //       abi,
  //       address: "0x123",
  //       functionName: "set",
  //       args: { moodvalue },
  //     });

  //     console.log(transactionHash); // transaction hash

  //     // wait for the transaction receipt
  //     const receipt = await waitForTransactionReceipt(config, {
  //       hash: transactionHash,
  //     });

  //     console.log(receipt); // transaction receipt
  //   } catch (error) {
  //     console.log(error); // handle errors
  //   }
  // }


  return (
    <div>
      <p>Mood: {mood}</p>
      <input type="text" ip="data"/>

      <button 
        onClick={getMoodF}
        style={{
          marginLef: "10px",
        }}
      >
        get Mood
      </button>

      <button
        onClick={setMoodF}
        style={{
          marginLef: "10px",
        }}
      >
        set Mood
      </button>

      <ConnectButton></ConnectButton>
    </div>
  )
}

export default App;
