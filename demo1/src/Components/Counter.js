import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }
     Increment(){
        //  this.state.count=this.state.count+1; // if  we use this way rendering wont happen in the page it will just change the value in console
        //  console.log(this.state.count);
        //state can not be modified directly.
        // this.setState({
        //     count:this.state.count+1
        // })
        // console.log(this.state.count);// this value will not be reflected soon in the page because setstate() is a synchronous
     // To make this synchronous pass the callback to the 2nd parameter of set state method
    //  this.setState({
    //      count:this.state.count+1 
    //         },
    //  ()=>{console.log('CallBack Function:',this.state.count) //schynconous check in console
    // }
    // ) 
    this.setState(prevState=>({
        count:prevState.count + 1
    }))
    //console.log(this.state.count)// Aschynconous
    console.log(this.state.count)
    }
    IncrementFive(){
       this.Increment();// In console the value changes to 1 rather than 5+
       this.Increment(); // this is because react update multiple update in one setState()
       this.Increment();
       this.Increment();
       this.Increment();

    }
     
    render() {
        return (
            <div>
                Count-{this.state.count}
                {/*<button onClick={()=>this.Increment()}>Increment</button>*/}
                <button onClick={()=>this.IncrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
