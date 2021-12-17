// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import user from "./components/SocialProfile/user.json"
import data from "./components/Statistics/data.json"
import friends from "./components/FriendList/friend.json"
import transactions from "./components/TransactionHistory/transactions.json"

ReactDOM.render(
  <React.StrictMode>
    <App 
    user={user}
    data={data}
    friends={friends}
    transactions={transactions}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// import data from "../src/Components/Statistics/data.json";
// import friends from "../src/Components/FriendList/friends.json";
// import transactions from "../src/Components/TransactionHistory/transactions.json";

// ReactDOM.render(
//   <React.StrictMode>
//     <App
//       user={user}
//       data={data}
//       friends={friends}
//       transactions={transactions}
//     />
//   </React.StrictMode>,
//   document.getElementById("root")
// );