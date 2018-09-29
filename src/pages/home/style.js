import styled from 'styled-components';

// 主页外层
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

// 主页左部分
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

// 主页右部分
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const BackTop = styled.div`
  position:fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`;

// 专题组件的外层
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

// 专题
export const TopicItem = styled.div`
  float: left;
  background-color:#f7f7f7;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

// 文章列表
export const ListItem = styled.div`
  overflow:hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

// 文章内容
export const ListInfo = styled.div`
  width: 500px;
  float:left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background-color: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

// 推荐
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
  
`;

// 推荐item
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  //background: url(${(props) => props.imgUrl});
  ${props => props.imgUrl};
  //background: url(${require('../../static/img/recommend-banner1.png')});
  background-size: contain;
`;

// 推荐作者区域
export const WriterWrapper =styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;