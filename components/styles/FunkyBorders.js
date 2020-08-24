import styled from 'styled-components';

const FunkyBorderTopRight = styled.div`
  position: absolute;
  border-top: 1.5px solid;
  right: 0;
  top: 0;
  width: 45%;
  height: 100%;
  border-right: 1.5px solid;
`;

export {FunkyBorderTopRight};

const FunkyBorderBottomLeft = styled.div`
  position: absolute;
  border-bottom: 1.5px solid;
  border-left: 1.5px solid;
  left: 0;
  bottom: 0;
  width: 45%;
  height: 100%;
`;

export {FunkyBorderBottomLeft};

const FunkyBorderTopLeft = styled.div`
  position: absolute;
  border-left: 1.5px solid;
  border-top: 1.5px solid;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
`;

export {FunkyBorderTopLeft}

const FunkyBorderRightBottom = styled.div`
  position: absolute;
  border-right: 1.5px solid;
  border-bottom: 1.5px solid;
  right: 0;
  bottom: 0;
  width: 45%;
  height: 100%;
`;

export {FunkyBorderRightBottom};