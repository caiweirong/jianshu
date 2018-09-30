import styled from 'styled-components';

// 登录外层
export const LoginWrapper = styled.div`
  position:absolute;
  z-index: 0;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 0;
  background-color: #eee;
`;

// 登录框
export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  padding-top: 20px;
`;

// 输入框
export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
`;

// 登录按钮
export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
`;