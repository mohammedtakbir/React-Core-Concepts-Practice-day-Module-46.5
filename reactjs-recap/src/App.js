import './App.css';
import Blog from './Components/Blog/Blog';
import Checklist from './Components/Checklist/Checklist';
import Mobile from './Components/Mobile/Mobile';
import Todo from './Components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Checklist></Checklist>
      {/* ৭. সেই ব্লগ কম্পোনেন্ট দিয়ে মিনিমাম তিনটা কম্পোনেন্ট বানাবে।  */}
      <Blog heading="heading1" author="author1"></Blog>
      <Blog heading="heading2" author="author2"></Blog>
      <Blog heading="heading3" author="author3"></Blog>
      <Mobile></Mobile>
      <Todo></Todo>
    </div>
  );
}






export default App;





//* recap

// <LoadPosts></LoadPosts>
{/* <District name="Noyakhali" special="Bivag"></District>
<District name="B.Bariya" special="Fighter"></District>
<District name="Barishal" special="language"></District> */}

// function LoadPosts(){
//   //* step1
//   const [posts, setPosts] = useState([]);
//   //* step2
//   useEffect( () => {
//   //* step3
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => setPosts(data))
//   }, [])
//   return(
//     <div>
//       <h1>Posts: {posts.length}</h1>
//       {
//         posts.map(post => <Post body={post.body} title={post.title}></Post>)
//       }
//     </div>
//   )
// }

// const districtStyle = {
//   backgroundColor: 'lightseagreen',
//   color: 'white',
//   borderRadius: '10px',
//   padding: '20px',
//   margin: '20px'
// }
// function Post(props){
//   return(
//     <div style={{padding: '30px', margin: '20px', backgroundColor: 'lightblue'}}>
//       <h2>Title: {props.title}</h2>
//       <p><span style={{fontWeight: 'bold', fontSize: '20px'}}>Comment</span>: {props.body}</p>
//     </div>
//   )
// }
// function District(props){
//   const [power, setPower] = useState(1);
//   const boostPower = () =>{
//     const newPower = power * 2;
//     setPower(newPower);
//   }
//   return(
//     <div className='district' style={districtStyle}>
//       <h2>Name: {props.name}</h2>
//       <p>Specialty: {props.special}</p>
//       <h3>Power: {power}</h3>
//       <button onClick={boostPower}>Boost the power</button>
//     </div>
//   )
// }