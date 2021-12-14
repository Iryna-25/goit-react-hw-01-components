// App.js
import './App.css';
import Profile from './Components/social-profile/profile';


// function App() {
//   return <div className="App">TEST</div>;
// }

const App = (props) => (
    <div>
      <Profile
        username={props.user.username}
        tag={props.user.tag}
        location={props.user.location}
        avatar={props.user.avatar}
        stats={props.user.stats}
      />
      {/* <Statistics title={props.data.title} stats={props.data} />
      <FriendList friends={props.friends} />,
      <TransactionHistory items={props.transactions} /> */}
    </div>
  );

export default App;