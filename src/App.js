// App.js
import './App.css';
import Profile from './components/SocialProfile/profile';
import Statistics from './components/Statistics/statistics';
import FriendList from './components/FriendList/friendList';
import TransactionHistory from './components/TransactionHistory/transactionHistory';


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