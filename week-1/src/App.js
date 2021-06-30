import React from "react";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import BucketList from "./BucketList";
import styled from "styled-components";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";
import {connect} from "react-redux";
import { loadBucket, createBucket } from "./redux/modules/bucket";

// 리덕스에 있는 상태값을 props형태로 app에 넣어줌
const mapStateToProps = (state)=>{
  return {bucket_list : state.bucket.list};

}

// 액션 생성을 감시하는 것 액션 반환 .
const mapDispatchToProps = (dispatch)=>{
  return{
    load: ()=>{
      dispatch(loadBucket());
    },

    create: (bucket) =>{
      dispatch(createBucket(bucket));
    }
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
   
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Progress/>
          <Line />
          <Switch>
          <Route
            path="/"
            exact
            render={(props) => 
            <BucketList 
            bucket_list={this.props.bucket_list} 
            history={this.props.history}/>}
          />
          {/* detail 페이지에서 버킷리스트를 보여주기 위해 
          몇 번째인지 알아야하기 때문에 index값을 가져온다 */}
          <Route path="/detail:index" component={Detail}/>
          <Route render={(props) => (
                <NotFound
                  history={this.props.history}
                />
              )}/>
          </Switch>
        </Container>
      
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;
// withRouter 적용
// connect로 컴포넌트에 연결
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));