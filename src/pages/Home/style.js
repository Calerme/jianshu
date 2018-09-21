import styled, { css } from 'styled-components'

export const LeftWrapper = styled.div`
  width: 640px;
  padding: 30px 0 0 15px;
`

export const RightWrapper = styled.div`
  width: 280px;
  padding-top: 30px;
  margin-left: 40px;
`

export const SubjectWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  font-size: 14px;
  .more {
    color: #787878;
    line-height: 34px;
    float: left;
    cursor: pointer;
    .iconfont {
      display: inline-block;
      transform: translate3d(3px, -1px, 0);
    }
  }
`
export const SubjectItem = styled.div`
  float: left;
  height: 34px;
  margin: 0 18px 18px 0;
  line-height: 34px;
  padding-left: 32px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: left top/ 32px 32px #f7f7f7 url(${(props) => props.imgUrl}) no-repeat;
  cursor: pointer;
  .text {
    display: inline-block;
    margin: 0 10px 0 8px;
  }
`

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 20px 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
  .content {
    width: 483px;
    ${(props) => !props.imgUrl && css`width: 100%`};
    h2 {
      font-size: 18px;
      line-height: 1.5;
      margin: 0 0 4px 0;
    }
    .desc {
      font-size: 13px;
      color: #999;
      margin: 0 0 8px 0;
    }
    .meta {
      font-size: 12px;
      color: #b4b4b4;
      margin: 0;
      height: 20px;
      line-height: 20px;
      .author,
      .comments {
        margin-right: 10px;
      }
      .iconfont {
        font-size: 12px;
        margin-right: 2px;
      }
    }
  }
  .img {
    ${(props) => !props.imgUrl && css`
      display: none;
    `}
    background: pink;
    width: 125px;
    height: 100px;
    overflow: hidden;
    img {
      width: 125px;
      height: 100px;
    }
  }
`

export const Recommend = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  li {
    text-indent: -9999px;
    list-style: none;
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: top left / 280px 50px no-repeat;
  }
`

export const QMWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  .qrCode {
    img {
      width: 60px;
      height: 60px;
    }
  }
  .intro {
    margin-left: 10px;
    .title {
      font-size: 15px;
      line-height: 21px;
      margin: 0;
      color: #333;
    }
    .desc {
      font-size: 13px;
      line-height: 18px;
      margin: 0;
      margin-top: 4px;
      color: #999;
    }
  }
  .qrPop {
    position: absolute;
    top: -190px;
    left: 50%;
    display: none;
    transform: translate3d(-50%, 0, 0);
    justify-content: center;
    align-items: center;
    width: 184px;
    height: 184px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background: #fff;
    transition: opacity .4s ease-in;
    opacity: 0;
    img {
      width: 170px;
      height: 170px;
    }
    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: "";
      width: 10px;
      height: 10px;
      border-right: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
      background: #fff;
      transform: translate3d(-50%, 50%, 0) rotate(45deg);
    }
  }
  &.fade-enter .qrPop {
    display: flex;
  }
  &.fade-enter-active .qrPop,
  &.fade-enter-done .qrPop,
  &.fade-exit {
    display: flex;
    opacity: 1;
  }
  &.fade-exit-active .qrPop {
    opacity: 0;
  }
`
