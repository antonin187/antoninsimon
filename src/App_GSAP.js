import logo from './logo.svg';
import './App.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useLayoutEffect, useState } from 'react';
function Box({ children, color }) {
  return <div className={`box ${color}`}>{children}</div>;
}

function fetachFakeData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          color: 'blue',
        },
        {
          id: 2,
          color: 'red',
        },
        {
          id: 3,
          color: 'purple',
        }
      ])
    }, 2000)
})}

function App() {
  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState();
  const app = useRef();

  useEffect(() => {
    if (loadingState !== "start") return;

    const loadData = async () => {
      const data = await fetachFakeData()
      setData(data)
      setLoadingState("complete")
    };
    loadData()
  }, [loadingState])


  useLayoutEffect(() => {
    if (loadingState !== "complete") return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".box",
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.2
        }
      )
    }, app)
    return () => ctx.revert()
  }, [loadingState])

  const startLoading = () => {
    if(!loadingState) {
      setLoadingState("start")
    };
  }

  return (
    <div className="panel flox-row app" ref={app}>


      {!loadingState ? (
      <div>
      <button onClick={startLoading}>Start Loading</button>
      </div>
      ): null}

      {loadingState === "start" ? (
        <div className="loading">Loading fake data...</div>
      ) : null}

      {data.map((item) => (
        <Box key={item.id} {...item}>Box {item.id}</Box>
      ))}

    </div>
  );
}

export default App;
