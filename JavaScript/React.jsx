// props.children - component's value that represents passed inside content

// static keyword is for default props in class components
const defaultProps = {author: "Clark", body: "Belay, heavy-hearted lad. you won't haul the lighthouse.", date: new Date().toLocaleDateString("en-US") };
component.defaultProps = defaultProps; /* for functional components */

class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

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
}, []); /* hook doesn't depend on any state. by default, without brackets, it's cDM and CDU combined */

// passing down the setter function:
const handler = () => {};
<Component onEventOccured={handler.bind(this/*, ...parameters */)} />

// Context
const Context = React.createContext();
// passing context to child components
<Context.Provider value={status: authStatus, login} >put other components here that will receive context</Context.Provider>
// in that file(functional component): import Context;
const auth = useContext(Context);
const component = () => (
  <>
    {auth.status ? <Component/> : null}
    {auth.status && <Component/>}
    {auth.status || <Redirect/>}
  </>
);
// state updates may be asynchronous
// if list of items: 1. doesn't change or values are not computed, 2. items in list have no ids, 3. the list is never reordered or filtered - we are safe to use index, else we ought to use id field from data
// 'shortid' package generates ids
// input type='file' is uncontrolled component, it is preferred to use controlled components rathen than uncotrolled ones

// -- Strict Mode:
// Like Fragment, React.StrictMode doesn't render any additional UI elements. It is used to brace code with potential problems.

// When react diffing two trees, it first compares two root elements. Whenever root elements have different types, react tears down old tree and builds new one from scratch. If elements of the same type or have different classes or children, then DOM keeps the same underling DOM node.