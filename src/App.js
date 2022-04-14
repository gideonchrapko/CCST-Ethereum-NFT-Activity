// import logo from './logo.svg';
import React from 'react'
import Data from './json/data'
import './App.css';

function App() {
  // const [images, setImages] = useState()
  // const [clientId, setClientId] = useState()
  // const [dataJson, setdataJson] = useState(Data)


  // const valuesOne = [...Array(Data.data[0].transactions)].map((_,i) => i+1);

  const valuesOne = [...Array(Data.data[0].transactions)]
  const valuesTwo = [...Array(Data.data[1].transactions)]
  const valuesThree = [...Array(Data.data[2].transactions)]
  // console.log(valuesOne)


  console.log(Data)

  return (
    <div className="App">
      <div style={{ display: "inline-flex", with: "100vw", backgroundColor: "red", position: "relative" }}>
        {valuesOne &&
          valuesOne.map((i) =>{
            return (
              <h1 title={`${Data.data[0].name} ${Data.data[0].transactions}`} key={i} style={{ fontSize: "15px", position: "relative", float: "left"  }}>&#128512;</h1>
            )
          })
        }
      </div>
      <div style={{ display: "inline-flex", with: "100vw", backgroundColor: "green", position: "relative" }}>
        {valuesTwo &&
            valuesTwo.map((i) =>{
              return (
                <h1 title={`${Data.data[1].name} ${Data.data[1].transactions}`} key={i} style={{ fontSize: "15px", position: "relative", float: "left"  }}>&#x1F192;</h1>
              )
            })
          }
      </div>
      <div style={{ display: "inline-flex", with: "100vw", backgroundColor: "blue", position: "relative" }}>
        {valuesThree &&
            valuesThree.map((i) =>{
              return (
                <h1 title={`${Data.data[2].name} ${Data.data[2].transactions}`} key={i} style={{ fontSize: "15px", position: "relative", float: "left"  }}>&#127795;</h1>
              )
            })
          }
      </div>
    </div>
  );
}

export default App;
