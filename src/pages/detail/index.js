import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import {
  DetailWrapper,
  Header,
  Content
} from "./style";

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content>
          <img src={this.props.imgUrl} alt=""/>
          {
            this.props.content.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          }
        </Content>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  imgUrl: state.getIn(['detail', 'imgUrl']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});


export default connect(mapState, mapDispatch)(withRouter(Detail));