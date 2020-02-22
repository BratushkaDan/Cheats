import User from "./User"; // .ts, .js is not written

const mapUsers = data => {
    return data.map((user, key) => <User key={key} {...user} />); // component can be close using forward slash
}
// props.children - component's value that indicates inserted inside content

// static keyword for default props in class components and
const defaultProps = {author: "Clark", body: "Belay, heavy-hearted lad. you won't haul the lighthouse.", date: new Date().toLocaleDateString("en-US") };
component.defaultProps /* for functional components */

constructor(props) {
    this.state {}
}
// {!this.props.children ? <UsersList/> : this.props.children }
// {!this.props.property ? <UsersList {...this.props} /> : null }

// 1. constructor(props)
// 2. getDerivedStateFromProps(nextProps, prevState) { return null; /* if not */ } // changes are merged
// 3. shouldComponentUpdate(nextProps, nextState, nextContext) { return boolean; }
// 4. render()
// 5. getSnapshotBeforeUpdate(prevProps, prevState) {}
// 6. componentDidUpdate(prevProps, prevState, snapshot) {}
// 7. componentDidMount() {}
// 8. componentWillUnmount() {}

// React Hooks
useEffect(() => {
    window.addEventListener('mousemove', () => {});

    // returned function will be called on component unmount
    return () => {
        window.removeEventListener('mousemove');
    }
}, [] /* means function doesn't depend on any state. by default, without brackets, it's cDM and CDU combined  */)

// passing down the setter function:
const handler: void = () => {};
<Component onEventOccured={handler.bind(this/*, ...parameters */)} />

// Context
const Context = React.createContext();
// in other file: import Context;
<Context.Provider value={status: authStatus, login} >put other tags here that will receive context</Context.Provider>
// using hooks
// in that file: import Context;
const auth = useContext(Context);
<>{auth.status ? <Component/> : null}</>


// Redux

/*
Server data(payload) may be stored in Redux, where as component state is stored inside of component

*/

const mapStateToProps = state => {
  return {
      users: state.users.data,
      auth: state.auth.status
  };
};
const mapDispatchToProps = dispatch => {
  // returns object, containing results of dispatch function on wrapper (after functions are dispatched, they are linked to reducers in Store object)
  return {
      fetchUsers = () => dispatch(fetchUsers()), /* fetchUser() is imported action */
      checkAuth: currentAuthStatus => dispatch(checkAuth(currentAuthStatus)) /* checkAuth() is imported action */
  };
};