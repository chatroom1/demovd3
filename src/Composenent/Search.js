import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:''
        }
        
    }
    
   
    IsChanges=(event)=>{
        console.log(event.target.value)
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnect(this.state.tempValue);

    }
    hienthinut=()=>{
        if(this.props.trangthaichinhsua===true){
          return     <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.ketnoi()}>Close</div>;
    
    
        }
        else{
          return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.ketnoi()}>AddUser</div> ;
        }
    }
    render() {
        return (
            <div>
                 {/* {//this.XuLyEditStatus()} */}
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" className="form-control" onChange={(event) => this.IsChanges(event)} placeholder="Nhập tìm kiếm" aria-describedby="helpId" style={{width: '600px'}} />
                    <div className="btn btn-info" onClick={(dl) => this.props.checkConnect(this.state.tempValue)}>Tìm kiếm</div>
                    </div>
                </div>
                
               <div >
               {
                   this.hienthinut()
               }
               </div>
                
            </div>
        )
    }
}

export default Search
