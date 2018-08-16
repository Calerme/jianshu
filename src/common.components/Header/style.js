import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  border-bottom: 1px solid #f0f0f0;
  .wrapper{
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    height: 56px;
    margin: 0 auto;
  }
`

export const Logo = styled.div`
  flex: 1;
  img {
    width: 100px;
    height: 56px;
  }
`
/** Middle Area */
export const MiddleArea = styled.div`
  width: 960px;
  height: 56px;
  margin: 0 auto;
  .iconfont {
    display: inline-block;
    margin-right: 2px;
    font-size: 20px;
    transform: translate3d(0, -1px, 0);
  }
`

export const HomeButton = styled.a`
  display: inline-block;
  width: 89px;
  vertical-align: top;
  font-size: 17px;
  line-height: 56px;
  color: rgb(234, 111, 90);
  cursor: pointer;
`

export const DownloadButton = styled.a`
  display: inline-block;
  height: 56px;
  vertical-align: top;
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 56px;
  vertical-align: top;
  padding: 9px 15px;
  .input {
    width: 240px;
    height: 38px;
    padding: 0 20px;
    font-size: 14px;
    border: none;
    background: #eee;
    border-radius: 19px;
    outline: none;
    transition: all .3s ease-out;
  }
  .badge {
    position: absolute;
    top: 13px;
    right: 22px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    color: #969696;
    text-align: center;
    cursor: pointer;
  }
  ${
    (props) => props.focused && css`
      .input {
        width: 320px;
      }
      .badge {
        color: #fff;
        background: #969696;
        .iconfont {
          font-size: 17px;
        }
      }`
  }
`

export const ModeButton = styled.a`
  float: right;
  height: 56px;
  line-height: 56px;
  margin: 0 15px;
  font-size: 16px;
  color: #969696;
  cursor: pointer;
`

export const LoginButton = styled.a`
  float: right;
  width: 36px;
  height: 56px;
  margin: 0 15px
  line-height: 56px;
  font-size: 15px;
  color: #969696;
  cursor: pointer;
`
/** /Middle Area */


/** Right Area */
export const RightArea = styled.div`
  flex: 1;
  height: 56px;
`

export const WriteAriticle = styled.a`
  float: right;
  width: 100px;
  height: 40px;
  margin: 8px;
  line-height: 40px;
  font-size: 15px;
  border-radius: 20px;
  text-align: center;
  background: rgb(234, 111, 90);
  color: #fff;
  cursor: pointer;
  .iconfont {
    display: inline-block;
    margin-right: 5px;
    font-size: 14px;
    transform: translate3d(0, -1px, 0);
  }
`

export const Registry = styled.div`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px;
  font-size: 15px;
  color: rgb(234, 111, 90);
  border: 1px solid;
  border-radius: 19px;
  text-align: center;
  cursor: pointer;
`
/** /Right Area */