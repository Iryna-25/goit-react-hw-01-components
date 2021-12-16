// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import user from "../src/Components/SocialProfile/user.json"
import data from "../src/Components/statistics/data.json"
import friends from "../src/Components/FriendList/friend.json"
import transactions from "../src/Components/TransactionHistory/transactions.json"

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