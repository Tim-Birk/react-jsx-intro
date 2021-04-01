const App = () => (
  <div>
    <Person
      name='Mary'
      age={17}
      hobbies={['singing', 'rock climbing', 'tennis', 'bitcoin']}
    />
    <Person
      name='Billiam'
      age={18}
      hobbies={['painting', 'break dancing', 'volunteer work']}
    />
    <Person name='Jean-Louise' age={24} hobbies={['reading', 'napping']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
