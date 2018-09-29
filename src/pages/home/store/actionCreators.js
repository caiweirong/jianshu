import axios from "axios";
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList
});

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});

// 拿到主页的数据
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      let result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
};

// 更多内容
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      let result = res.data.data;
      dispatch(addHomeList(result, page + 1))
    })
  }
};

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
});