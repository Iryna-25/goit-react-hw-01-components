// App.js
import './App.css';
import Profile from './Components/SocialProfile/profile';
import Statistics from './Components/statistics/statistics';
import FriendList from './Components/FriendList/friendList';
import TransactionHistory from './Components/TransactionHistory/transactionHistory';


const App = (props) => (
    <div>
      <Profile
        username={props.user.username}
        tag={props.user.tag}
        location={props.user.location}
        avatar={props.user.avatar}
        stats={props.user.stats}
      />
      <Statistics title={props.data.title} stats={props.data} />
      <FriendList friends={props.friends} />,
      <TransactionHistory items={props.transactions} />
    </div>
);

export default App;