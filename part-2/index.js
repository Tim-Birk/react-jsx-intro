const App = () => (
  <div>
    <Tweet
      username='doglover1'
      name='Sara'
      date='2/22/2021'
      message='I love doggies!!'
    />
    <Tweet
      username='catlover2'
      name='Jake'
      date='2/04/2021'
      message='I love kitty cats!!!'
    />
    <Tweet
      username='lameo12'
      name='Bob'
      date='3/19/2021'
      message='I do not really like animals :('
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
