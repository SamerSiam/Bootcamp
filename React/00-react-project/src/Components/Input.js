import React ,{Component}from 'react';
import Button from './Button'

class Input extends Component{
       constructor(props) {
           super(props);
           this.inputRef=React.createRef();
           this.inputRef2=React.createRef();
          
           this.state={value:'',copied:''};
       } 
    
     
    onFormSubmit= event=>{
        event.preventDefault();
        this.props.onSubmit(this.state.value)
    };

    componentDidMount() {
        this.inputRef.current.focus() 
        console.log(this.inputRef.current)
    }
    copyText=(e)=>{
        this.inputRef2.current.select()
        const result= document.execCommand('copy')
        this.setState({copied:result})
        
    }



    render() {

        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <input ref={this.inputRef} className="ui field" type="text" value={this.state.value} 
                     onChange={e=> this.setState({value:e.target.value })}/>
                      <input ref={this.inputRef2} type="text"/>
                      <Button text='Copy Text from box2' onHandleClick = {this.copyText}/>
                      
                </form>
            </div>
        )
    }
}

export default Input