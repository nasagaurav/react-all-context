import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
const OnlineContext = createContext();
export default function App() {
  const [a, seta] = useState(null);
  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((d) => seta(d));
  };
  const value = {
    a,
    fetchData,
  };
  return (
    <OnlineContext.Provider value={value}>
      <Posts />
      <Comments />
      <Albums />
      <Photos />
      <Users />
      <Todos />
      <Table />
    </OnlineContext.Provider>
  );
}
const Posts = () => {
  const data = useContext(OnlineContext); //a ,fetchData
  // console.log(data);
  const p1 = () => {
    data.fetchData('https://jsonplaceholder.typicode.com/posts');
  };
  return (
    <div>
      <button onClick={p1}>Posts</button>
    </div>
  );
};
const Comments = () => {
  const data = useContext(OnlineContext);
  // console.log(data);
  const p1 = () => {
    data.fetchData('https://jsonplaceholder.typicode.com/comments');
  };
  return (
    <div>
      <button onClick={p1}>Comments</button>
    </div>
  );
};
const Albums = () => {
  const data = useContext(OnlineContext);
  // console.log(data);
  const p1 = () => {
    data.fetchData('https://jsonplaceholder.typicode.com/albums');
  };
  return (
    <div>
      <button onClick={p1}>Albums</button>
    </div>
  );
};
const Photos = () => {
  const data = useContext(OnlineContext);
  // console.log(data);
  const p1 = () => {
    data.fetchData('https://jsonplaceholder.typicode.com/photos');
  };
  return (
    <div>
      <button onClick={p1}>Photos</button>
    </div>
  );
};
const Users = () => {
  const data = useContext(OnlineContext);
  // console.log(data);
  const p1 = () => {
    data.fetchData('https://jsonplaceholder.typicode.com/users');
  };
  return (
    <div>
      <button onClick={p1}>Users</button>
    </div>
  );
};
const Todos = () => {
  const data = useContext(OnlineContext);
  // console.log(data);
  const p1 = () => {
    data.fetchData('https://jsonplaceholder.typicode.com/todos');
  };
  return (
    <div>
      <button onClick={p1}>Todos</button>
    </div>
  );
};
const Table = () => {
  const data = useContext(OnlineContext); //a,fetchData
  return (
    <div>
      <pre>outout json in stringify format here</pre>
      <pre>{JSON.stringify(data.a, null, 2)}</pre>
    </div>
  );
};
