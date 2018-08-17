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
    margin: 0 10px 0 6px;
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
  }
`
